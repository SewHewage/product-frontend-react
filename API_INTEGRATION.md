# Laravel API Integration Guide

This guide explains how to connect your ShopHub React application to a Laravel API backend.

## 📋 Prerequisites

- Laravel API running on your server
- Products table with required fields
- CORS enabled on Laravel backend
- API endpoints set up

## 🔌 Connecting Your API

### Step 1: Update API Base URL

Edit `src/services/api.ts`:

```typescript
const API_BASE_URL = 'http://localhost:8000/api'; // Change this to your API URL
```

Examples:
- Local development: `http://localhost:8000/api`
- Remote server: `https://api.yoursite.com/api`
- Docker container: `http://docker-host:8000/api`

### Step 2: API Response Format

Your `/api/products` endpoint should return JSON in this format:

```json
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "description": "High-quality sound with noise cancellation",
    "price": 99.99,
    "image_url": "https://cdn.example.com/products/headphones.jpg"
  },
  {
    "id": 2,
    "name": "Smart Watch",
    "description": "Track your fitness with advanced features",
    "price": 299.99,
    "image": "https://cdn.example.com/products/watch.jpg"
  }
]
```

**Supported Fields:**
- `id` (required) - Unique product identifier
- `name` (required) - Product name
- `description` (required) - Product description
- `price` (required) - Product price (number)
- `image_url` or `image` (optional) - Product image URL

### Step 3: CORS Configuration (Laravel)

In your Laravel `config/cors.php`:

```php
'paths' => ['api/*'],
'allowed_methods' => ['*'],
'allowed_origins' => ['http://localhost:5173', 'http://localhost:3000'],
'allowed_origins_patterns' => [],
'allowed_headers' => ['*'],
'exposed_headers' => [],
'max_age' => 0,
'supports_credentials' => false,
```

Or use middleware in your routes:

```php
Route::middleware('cors')->group(function () {
    Route::get('/products', 'ProductController@index');
});
```

## 🛠️ Laravel Backend Setup Example

### Database Migration

```php
Schema::create('products', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->text('description');
    $table->decimal('price', 8, 2);
    $table->string('image_url')->nullable();
    $table->timestamps();
});
```

### API Controller

```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function show($id)
    {
        return Product::findOrFail($id);
    }
}
```

### API Routes

```php
Route::prefix('api')->group(function () {
    Route::get('/products', 'App\Http\Controllers\Api\ProductController@index');
    Route::get('/products/{id}', 'App\Http\Controllers\Api\ProductController@show');
});
```

## 🧪 Testing the Integration

### 1. Check API Endpoint

Open your browser and visit:
```
http://localhost:8000/api/products
```

You should see JSON data.

### 2. Enable Network Tab

1. Open Developer Tools (F12)
2. Go to Network tab
3. Reload http://localhost:5173/
4. Look for API calls to your products endpoint
5. Check response data

### 3. Check Console

Look for any error messages:
- Network errors
- CORS errors
- JSON parsing errors

## 🚨 Common Issues & Solutions

### Issue: "CORS policy: No 'Access-Control-Allow-Origin' header"

**Solution:** Add CORS headers to your Laravel API:

```php
// In your route or middleware
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
```

### Issue: "Failed to load products"

**Checklist:**
- [ ] Is your Laravel API running?
- [ ] Is the API URL correct in `src/services/api.ts`?
- [ ] Check browser console for errors
- [ ] Verify API returns valid JSON
- [ ] Check CORS settings

### Issue: Images not loading

**Solution:** Ensure `image_url` or `image` field:
- Contains full URL (not relative path)
- Points to accessible server
- Is publicly accessible (no authentication)

Example:
```json
{
  "image_url": "https://cdn.example.com/products/item.jpg"
}
```

### Issue: App uses demo data instead of API

The app automatically uses demo data when:
- API request fails
- API returns error
- Connection timeout occurs

This is a built-in fallback for development/testing.

To force using your API, comment out the demo data in `src/components/Products.tsx`:

```typescript
// Comment out the demoProducts to require actual API
const demoProducts: Product[] = [
  // ... remove these or leave as is for fallback
];
```

## 📊 Monitoring API Calls

### Browser DevTools

1. Open DevTools (F12)
2. Network tab
3. Look for requests to `/api/products`
4. Click request to see:
   - Request headers
   - Response data
   - Response status code

### Check Response Time

For performance optimization:
- Goal: < 200ms for API response
- If slower, consider pagination
- Implement caching strategy

## 🔄 Pagination (Advanced)

For large product lists, implement pagination:

### Update API Service

```typescript
export const productService = {
  async getProducts(page: number = 1, limit: number = 12): Promise<Product[]> {
    const response = await api.get<Product[]>('/products', {
      params: { page, limit },
    });
    return response.data;
  },
};
```

### Update Products Component

```typescript
const [page, setPage] = useState(1);
const [hasMore, setHasMore] = useState(true);

const handleLoadMore = async () => {
  const newProducts = await productService.getProducts(page + 1);
  if (newProducts.length < 12) setHasMore(false);
  setProducts([...products, ...newProducts]);
  setPage(page + 1);
};
```

## 🔒 Authentication (If Required)

If your API requires authentication:

```typescript
// Add token to requests
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
});
```

## 📝 Environment Variables

Create `.env` file in project root:

```
VITE_API_BASE_URL=http://localhost:8000/api
```

Update `src/services/api.ts`:

```typescript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
```

## 🚀 Deployment Considerations

### Production API URL

For production deployment, update your API URL:

```typescript
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.yoursite.com/api'
  : 'http://localhost:8000/api';
```

### CORS Headers

Ensure production server has proper CORS headers:

```
Access-Control-Allow-Origin: https://yoursite.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

### SSL/HTTPS

If frontend is HTTPS, API must also be HTTPS for security.

## 📞 Support

For API integration issues:
1. Check backend logs
2. Verify API endpoint returns valid JSON
3. Use tools like Postman to test API
4. Check browser DevTools Network tab
5. Verify CORS configuration

## 🔗 Related Documentation

- [Axios Documentation](https://axios-http.com/)
- [Laravel API Resources](https://laravel.com/docs/10.x/eloquent-resources)
- [CORS Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [REST API Best Practices](https://restfulapi.net/)

---

**Your API is now connected!** 🎉

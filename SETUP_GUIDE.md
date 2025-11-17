# ShopHub Setup and Development Guide

## Project Overview

ShopHub is a fully-featured e-commerce product showcase application built with React, TypeScript, and Vite. It provides a modern, responsive UI for browsing products with real-time search, shopping cart functionality, and beautiful animations.

## ✅ What's Included

### Components Built
1. **Header Component** - Navigation, search bar, cart icon with counter
2. **Banner Component** - Promotional section with call-to-action
3. **Products Component** - Grid layout with loading states and error handling
4. **ProductCard Component** - Individual product display with hover animations
5. **Footer Component** - Links, social media, and copyright info

### Features Implemented
- ✅ Dynamic product grid from API (with demo fallback)
- ✅ Real-time search and filtering
- ✅ Add to cart functionality with counter
- ✅ Loading spinner during data fetch
- ✅ Error handling and fallback to demo data
- ✅ Smooth hover animations on product cards
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll to products section
- ✅ Mobile hamburger menu
- ✅ Social media icon integration

## 🚀 Getting Started

### Step 1: Start the Development Server

The dev server should already be running at `http://localhost:5173/`

If not, run:
```bash
cd c:\Users\Warsha\Desktop\product-frontend-react
npm run dev
```

### Step 2: Test the Application

1. **Open in Browser**: http://localhost:5173/
2. **Try Search**: Type in the search bar to filter products
3. **Add to Cart**: Click any "Add to Cart" button - watch the cart counter increase
4. **View Responsive Design**: Resize browser to see mobile layout
5. **Click Shop Now**: In the banner to scroll to products section

### Step 3: Connect to Your Laravel API

Update `src/services/api.ts`:

```typescript
const API_BASE_URL = 'http://YOUR-LARAVEL-API.com/api';
```

Your Laravel `/api/products` endpoint should return:

```json
[
  {
    "id": 1,
    "name": "Product Name",
    "description": "Product Description",
    "price": 99.99,
    "image_url": "https://example.com/image.jpg"
  }
]
```

## 📁 File Structure Explained

```
src/
├── components/
│   ├── Header.tsx & Header.css
│   │   └── Sticky header with navigation, search, and cart counter
│   ├── Banner.tsx & Banner.css
│   │   └── Hero section with gradient and call-to-action button
│   ├── Products.tsx & Products.css
│   │   └── Main product grid container with search filtering
│   ├── ProductCard.tsx & ProductCard.css
│   │   └── Individual product cards with animations
│   └── Footer.tsx & Footer.css
│       └── Footer with links and social media icons
├── services/
│   └── api.ts
│       └── Axios API service for fetching products
├── App.tsx
│   └── Main application component combining all sections
├── App.css
│   └── Global app styles
├── main.tsx
│   └── React entry point
└── index.css
    └── Global CSS reset and typography
```

## 🎨 Color Scheme

- **Primary Accent**: `#ff6b6b` (Coral Red) - Buttons, hover states
- **Dark Text**: `#333` - Main text
- **Medium Text**: `#666` - Secondary text
- **Light Background**: `#f9f9f9` - Section backgrounds
- **Dark Background**: `#1a1a1a` - Footer
- **Gradient**: `135deg, #667eea 0%, #764ba2 100%` - Banner

## 📱 Responsive Design Details

### Desktop (1024px+)
- 4-column product grid
- Full navigation visible
- Large search bar
- All features accessible

### Tablet (768px - 1023px)
- 3-column product grid
- Condensed navigation
- Hamburger menu available
- Touch-friendly button sizes

### Mobile (<768px)
- Single column product grid
- Hamburger menu (default)
- Simplified search bar
- Stacked layout for all sections

## 🔧 Common Tasks

### Add a New Component

1. Create `src/components/ComponentName.tsx`
2. Create `src/components/ComponentName.css`
3. Import in `App.tsx` and add to render

### Modify Colors

1. Edit color values in each component's CSS file
2. Common colors: `#ff6b6b`, `#333`, `#f9f9f9`
3. Run `npm run dev` to see changes immediately

### Add New Product Fields

1. Update the `Product` interface in `src/services/api.ts`
2. Update `ProductCard.tsx` to display the new field
3. Ensure your API returns the new field

### Test Without API

The application includes demo data. If your Laravel API isn't available:
- Products will still load from the fallback demo data
- Search functionality works perfectly
- Cart counter works as expected

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## 🎯 Key Features Explained

### Search Functionality
```typescript
// Real-time filtering as user types
const filtered = products.filter(
  (product) =>
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
);
```

### Cart Counter
```typescript
// Increments when "Add to Cart" is clicked
const handleAddToCart = (product: Product) => {
  setCartCount((prev) => prev + 1);
};
```

### Loading States
- Spinner animation while fetching
- Error message if API fails
- Fallback to demo data automatically

### Animations
- Card lift on hover: `transform: translateY(-8px)`
- Image zoom on hover: `transform: scale(1.08)`
- Button animations: `transition: all 0.3s ease`

## 🐛 Troubleshooting

### Products not loading
**Check:**
- Is your Laravel API running?
- Is CORS enabled on the Laravel backend?
- Check the API URL in `src/services/api.ts`
- Look at browser console for error messages

**Solution:**
- The app automatically falls back to demo data if API fails
- Check browser DevTools Network tab to see API response

### Search not working
**Solution:**
- Check that `onSearch` prop is passed correctly to `Products`
- Ensure product names include your search terms
- Try clearing the search box and retyping

### Styles not applying
**Solution:**
- Make sure CSS files are imported in components
- Check file paths (should be `./ComponentName.css`)
- Clear browser cache (Ctrl+Shift+Delete)

### Port 5173 already in use
**Solution:**
```bash
# Vite will automatically use next available port
# Or kill the process using port 5173
lsof -ti:5173 | xargs kill -9
```

## 📊 Performance Tips

1. **Images** - Use optimized images (WebP preferred)
2. **API** - Implement pagination for large product lists
3. **Search** - Add debouncing for large datasets
4. **Builds** - Run `npm run build` to check bundle size

## 🚀 Deployment

### Build the Application
```bash
npm run build
```

### Deploy Options

**Vercel** (Recommended for Vite)
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
netlify deploy --prod --dir=dist
```

**GitHub Pages**
- Set up in repository settings
- Push to `gh-pages` branch

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vite.dev/)
- [Axios Documentation](https://axios-http.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🎓 Learning from This Project

This project demonstrates:
- Component-based architecture
- TypeScript with React
- CSS Flexbox and Grid layouts
- API integration with error handling
- State management with hooks
- Responsive design patterns
- Animation and transitions
- Form handling (search input)

## 📞 Support

If you encounter issues:
1. Check the console for error messages
2. Review the troubleshooting section above
3. Verify all dependencies are installed: `npm install`
4. Clear cache and rebuild: `npm run build`

---

**Happy coding! 🎉**

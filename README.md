# ShopHub - Product Frontend React Application

A modern, responsive e-commerce product showcase built with React, TypeScript, and Vite. Features a dynamic product grid with search functionality, shopping cart counter, and beautiful animations.

## ✨ Features

### Core Functionality
- ✅ **Dynamic Product Grid** - Fetches products from a Laravel API (with demo fallback data)
- ✅ **Product Cards** - Display with image, name, description, price, and "Add to Cart" button
- ✅ **Search & Filter** - Real-time product search by name or description
- ✅ **Cart Counter** - Displays total items added to cart in the header
- ✅ **Loading States** - Animated spinner while fetching data
- ✅ **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ✅ **Hover Animations** - Smooth card animations on interaction

### UI Sections

#### Header
- Logo (ShopHub text with emoji)
- Navigation links (Home, Products, Contact)
- Search bar with search functionality
- Shopping cart icon with item counter
- Mobile-responsive hamburger menu

#### Banner
- Welcome tagline
- Promotional text
- "Shop Now" button (scrolls to products section)
- Beautiful gradient background with animations

#### Products Section
- Dynamic product grid (responsive layout)
- Individual product cards with:
  - Product image
  - Product name
  - Short description
  - Price
  - "Add to Cart" button (visible on hover and always)
  - Hover lift animation
- Search results display
- No results message with "Show All Products" button
- Loading spinner during data fetch
- Error message with fallback to demo data

#### Footer
- About section
- Quick links
- Social media icons (Facebook, Twitter, Instagram, LinkedIn)
- Copyright information

## 🛠️ Tech Stack

- **React** ^19.2.0
- **TypeScript** ~5.9.3
- **Vite** ^7.2.2
- **Axios** ^1.6.0 (for API calls)
- **React Icons** ^5.0.0 (for SVG icons)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Header with search and cart
│   ├── Header.css
│   ├── Banner.tsx          # Banner section
│   ├── Banner.css
│   ├── Products.tsx        # Product grid container
│   ├── Products.css
│   ├── ProductCard.tsx     # Individual product card
│   ├── ProductCard.css
│   ├── Footer.tsx          # Footer section
│   └── Footer.css
├── services/
│   └── api.ts              # API service with Axios
├── App.tsx                 # Main app component
├── App.css
├── main.tsx
├── index.css
└── assets/
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory**
```bash
cd product-frontend-react
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## ⚙️ Configuration

### API Endpoint

To connect to your Laravel API, update the `API_BASE_URL` in `src/services/api.ts`:

```typescript
const API_BASE_URL = 'http://localhost:8000/api';
```

### Expected API Response

Your Laravel API `/api/products` endpoint should return:

```json
[
  {
    "id": 1,
    "name": "Product Name",
    "description": "Short description",
    "price": 99.99,
    "image_url": "https://example.com/image.jpg"
  }
]
```

## 🎯 Usage Guide

### Search Products
- Type in the search bar to filter products by name or description in real-time

### Add to Cart
- Click the circular cart button on product cards or the "Add to Cart" button below
- Cart counter updates in the header

### Navigation
- Click "Shop Now" in the banner to scroll to products section
- Use hamburger menu on mobile devices to toggle navigation

### Responsive Design
- Desktop: 4-column grid
- Tablet: 3-column grid
- Mobile: 1-column grid (stacked)

## 🎨 Customization

### Color Scheme

Primary colors used throughout:
- Accent Color: `#ff6b6b` (coral red)
- Dark Color: `#1a1a1a` (footer background)
- Light Background: `#f9f9f9`

Update these colors in individual component CSS files.

### Typography

System font stack is used for best performance:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

### API Connection Issues
1. Verify your Laravel API is running
2. Check `API_BASE_URL` in `src/services/api.ts`
3. Enable CORS on your Laravel backend
4. The app uses demo data as fallback if API fails

### Port Already in Use
Vite automatically uses the next available port if 5173 is taken.

### Build Errors
```bash
rm -r node_modules package-lock.json
npm install
npm run build
```

## 📦 Features Implemented

- ✅ Fetch products from Laravel API
- ✅ Display products in responsive grid layout
- ✅ Product cards with image, name, description, price
- ✅ "Add to Cart" buttons with counter in header
- ✅ Header with logo, navigation, search, cart icon
- ✅ Banner section with promotional content
- ✅ Footer with links and social icons
- ✅ Real-time search and filter functionality
- ✅ Loading states with spinner animation
- ✅ Error handling with fallback data
- ✅ Product card hover animations
- ✅ Mobile-responsive design
- ✅ Smooth scroll interactions
- ✅ Accessibility features

## 🚀 Future Enhancements

- [ ] Shopping cart with checkout functionality
- [ ] User authentication
- [ ] Product detail pages
- [ ] Customer reviews and ratings
- [ ] Wishlist feature
- [ ] Payment gateway integration
- [ ] Order history
- [ ] Admin dashboard

## 📄 License

MIT License - Feel free to use this project for your own purposes.
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

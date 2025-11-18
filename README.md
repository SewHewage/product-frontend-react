# Aahaas ECommerce - Product Frontend React Application

A modern React-based e-commerce frontend for browsing and managing products with real-time search and shopping cart functionality.

## Installation

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

## 🔗 Configure API URL

1. **Open the API configuration file**

Usually located in:
```
src/services/api.ts
```

2. **Add your backend API URL**

```typescript
const API_BASE_URL = "http://localhost:8000/api";
```

**If you are using .env file:**

Create a `.env` file in the project root:
```
VITE_API_URL=http://localhost:8000/api
```

Then update your API configuration to use the environment variable:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
```

3. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`


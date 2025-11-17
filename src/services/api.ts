import axios from 'axios';

const API_BASE_URL = 'https://eclass.skytechsl.com/backend/product-api-laravel1/public/api';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  image_url?: string;
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

function normalizeProduct(raw: any): Product {
  return {
    id: Number(raw.id),
    name: raw.name,
    description: raw.description,
    price:
      typeof raw.price === 'string'
        ? parseFloat(raw.price) || 0
        : Number(raw.price) || 0,
    image: raw.image,
    image_url: raw.image_url,
  };
}

export const productService = {
  async getProducts(): Promise<Product[]> {
    try {
      const response = await api.get<any[]>('/products');
      // normalize each product so price is a number
      return response.data.map(normalizeProduct);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  async getProduct(id: number): Promise<Product> {
    try {
      const response = await api.get<any>(`/products/${id}`);
      return normalizeProduct(response.data);
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  },
};

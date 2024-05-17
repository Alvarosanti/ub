import { create } from "zustand";

interface Product {
  id: string;
  title: string;
  desc: string;
  price: number;
  colors: string;
  sizes: string;
  categories: string;
  image: string;
  createdAt: string;
}

export type CartItem = {
  product: Product;
};

type CartState = {
  items: CartItem;
  addItem: (product: Product) => void;
  removeItem: (id: Product) => void;
  clearCart: () => void;
};

export const UseCart = create<CartState>();

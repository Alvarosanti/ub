import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Product {
  id: string;
  title: string;
  desc: string;
  price: number;
  image: string;
  createdAt: string;
  cantidad: number;
}

export type CartItem = {
  product: Product;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const UseCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.product.id === product.id
          );

          if (existingItemIndex !== -1) {
            // Si el producto ya está en el carrito, incrementa la cantidad
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].product.cantidad +=
              product.cantidad;
            return {   };
          } else {
            // Si el producto no está en el carrito, añádelo
            return { items: [...state.items, { product }] };
          }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

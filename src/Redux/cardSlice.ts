import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";


interface CartProduct extends Product {
  quantity: number;
}

interface CartState {
  products: CartProduct[];
}

// Helper to get cart from localStorage
export const getFromLocalStorage = (key: string) => {
  if (typeof window === "undefined") return [];
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : [];
};

const initialState: CartState = {
  products: getFromLocalStorage("cartItem"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existing = state.products.find((item) => item.id === action.payload.id);

      if (existing) {
        existing.quantity += 1;
        toast.info("Increased quantity successfully");
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        toast.success("Added to cart successfully");
      }

      localStorage.setItem("cartItem", JSON.stringify(state.products));
    },

    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const existing = state.products.find((item) => item.id === action.payload.id);

      if (existing) {
        existing.quantity += 1;
        toast.info("Increased quantity successfully");
      }

      localStorage.setItem("cartItem", JSON.stringify(state.products));
    },

    decreaseQuantity: (state, action: PayloadAction<Product>) => {
      const existing = state.products.find((item) => item.id === action.payload.id);

      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
          toast.warning("Decreased quantity successfully");
        } else {
          state.products = state.products.filter((item) => item.id !== action.payload.id);
          toast.error("Removed from cart", { icon: false });
        }
      }

      localStorage.setItem("cartItem", JSON.stringify(state.products));
    },

    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartItem", JSON.stringify(state.products));
      toast.error("Removed from cart", { icon: false });
    },

    clearCart: (state) => {
      state.products = [];
      localStorage.removeItem("cartItem");
      toast.info("Cart cleared");
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
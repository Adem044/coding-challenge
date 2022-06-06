import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export type Offer = {
  id: number;
  title: string;
  minQuantity: number;
  discount: number;
};
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  offers: Offer[];
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  price: number;
  discountApplied: boolean;
}

interface cartSliceState {
  cartItems: CartItem[];
}

const initialState: cartSliceState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cartItems = [
        ...state.cartItems,
        {
          id: state.cartItems.length,
          product: {
            ...action.payload,
          },
          quantity: 1,
          price: action.payload.price,
          discountApplied: false,
        },
      ];
    },
    addOneItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.map((cart) =>
        cart.product.id === action.payload
          ? {
              ...cart,
              quantity: cart.quantity + 1,
              price: cart.price + cart.product.price,
            }
          : cart
      );
    },
    applyDiscount: (
      state,
      action: PayloadAction<{ productId: number; discount: number }>
    ) => {
      state.cartItems = state.cartItems.map((cart) =>
        cart.product.id === action.payload.productId
          ? {
              ...cart,
              price: cart.price - cart.product.price * action.payload.discount,
              discountApplied: true,
            }
          : cart
      );
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        ({ product }) => product.id !== action.payload
      );
    },
    removeOneItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.map((cart) =>
        cart.product.id === action.payload
          ? {
              ...cart,
              quantity: cart.quantity - 1,
              price: cart.price - cart.product.price,
            }
          : cart
      );
    },
    removeDiscount: (
      state,
      action: PayloadAction<number>
    ) => {
      state.cartItems = state.cartItems.map((cart) =>
        cart.product.id === action.payload
          ? {
              ...cart,
              price: cart.product.price * cart.quantity,
              discountApplied: false,
            }
          : cart
      );
    },
  },
});

export const {
  addToCart,
  addOneItem,
  applyDiscount,
  removeFromCart,
  removeOneItem,
  removeDiscount,
} = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default store;

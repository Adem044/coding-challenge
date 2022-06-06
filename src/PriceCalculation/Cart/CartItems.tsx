import React, { useMemo } from "react";
import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux";

const CART_ITEMS = [
  {
    id: 1,
    name: "Whole french bread",
    description: "made in paris and destinated to the whole world",
    image: "https://via.placeholder.com/150",
    price: 1,
    rating: 2,
  },
  {
    id: 2,
    name: "Fresh Suiss milk",
    description: "semi skimmed milk that comes straight from the alpes farmers",
    image: "https://via.placeholder.com/150",
    price: 1.15,
    rating: 3.5,
  },
  {
    id: 3,
    name: "Butter",
    description: "produced by us to insure a high quality butter",
    image: "https://via.placeholder.com/150",
    price: 0.8,
    rating: 5,
  },
];
export const CartItems = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, cartItem) => total + cartItem.price, 0);
  }, [cartItems]);
  return (
    <div className="w-full">
      <h2 className="text-4xl mb-6">Cart</h2>
      <div className="flex flex-col gap-8">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        {cartItems.length === 0 && (
          <p className="text-center text-xl">No items in cart</p>
        )}
      </div>
      {cartItems.length !== 0 && (
        <div className="flex flex-col items-end">
          <h2 className="text-xl text-gray-700 mt-4">Subtotal:</h2>
          <h3 className="text-lg font-medium">£{totalPrice.toFixed(2)}</h3>
          <h2 className="text-xl text-gray-700 mt-4">Discount:</h2>
          <h3 className="text-lg font-medium">£0.00</h3>
          <h2 className="text-xl text-gray-700 mt-4">Total:</h2>
          <h3 className="text-lg font-medium">£{totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

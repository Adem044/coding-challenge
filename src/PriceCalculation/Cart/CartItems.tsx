import React from "react";
import { CartItem } from "./CartItem";

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
  return (
    <div className="flex-grow">
      <h1>Cart</h1>
      <div className="flex flex-col gap-8">
        {CART_ITEMS.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="flex flex-col items-end">
        <div className="flex flex-col items-end">
          <h2>Subtotal:</h2>
          <h3>$0.00</h3>
        </div>
        <div className="flex flex-col items-end">
          <h2>Discount:</h2>
          <h3>$0.00</h3>
        </div>
        <div className="flex flex-col items-end">
          <h2>Total:</h2>
          <h3>$0.00</h3>
        </div>
      </div>
    </div>
  );
};

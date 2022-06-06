import React from "react";
import { ProductItem } from "./ProductItem";

const PRODUCTS = [
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

export const ProductsList = () => {
  return (
    <div>
      <h1 className="text-4xl mb-6">Products</h1>
      <div className="flex flex-col gap-8">
        {PRODUCTS.map((product) => {
          return <ProductItem key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

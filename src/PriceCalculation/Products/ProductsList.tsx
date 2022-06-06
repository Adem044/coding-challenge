import React from "react";
import { ProductItem } from "./ProductItem";
import butterImg from "../../../assets/images/butter.jpg";
import milkImg from "../../../assets/images/milk.jpg";
import breadImg from "../../../assets/images/bread.jpg";
export const PRODUCTS = [
  {
    id: 1,
    name: "Whole french bread",
    description: "made in paris and destinated to the whole world",
    image: breadImg,
    price: 1,
    rating: 2,
    offers: [],
  },
  {
    id: 2,
    name: "Fresh Suiss milk",
    description: "semi skimmed milk that comes straight from the alpes farmers",
    image: milkImg,
    price: 1.15,
    rating: 3.5,
    offers: [
      {
        id: 1,
        title: "Buy 3 Milk and get the 4th milk for free",
        discount: 1,
        minQuantity: 3,
      },
    ],
  },
  {
    id: 3,
    name: "Butter",
    description: "produced by us to insure a high quality butter",
    image: butterImg,
    price: 0.8,
    rating: 5,
    offers: [
      {
        id: 1,
        title: "Buy 2 Butter and get a Bread at 50% off",
        discount: 0.5,
        minQuantity: 2,
      },
    ],
  },
];

export const ProductsList = () => {
  return (
    <div className="w-full">
      <h2 className="text-4xl mb-6">Products</h2>
      <div className="flex flex-col gap-8">
        {PRODUCTS.map((product) => {
          return <ProductItem key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

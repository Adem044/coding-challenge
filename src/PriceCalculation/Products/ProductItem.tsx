import React, { FC } from "react";
import starFull from "../../../assets/star-full.svg";
import starEmpty from "../../../assets/star-empty.svg";
import starHalf from "../../../assets/star-half.svg";

interface ProductsItemProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
}

export const ProductItem: FC<ProductsItemProps> = ({
  id,
  name,
  description,
  image,
  price,
  rating,
}) => {
  return (
    <div className="flex gap-8">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between flex-grow gap-4">
          <div>
            <h4 className="text-xl font-bold mb-1">{name}</h4>
            <p>{description}</p>
          </div>
          <div>
            <div className="flex mb-2">
              {[1, 2, 3, 4, 5].map((num) => {
                if (num <= rating) {
                  return (
                    <img
                      key={num}
                      src={starFull}
                      alt="star"
                      height={24}
                      width={24}
                    />
                  );
                }
                if (num - 0.5 === rating) {
                  return (
                    <img
                      key={num}
                      src={starHalf}
                      alt="star"
                      height={24}
                      width={24}
                    />
                  );
                }
                return (
                  <img
                    key={num}
                    src={starEmpty}
                    alt="star"
                    height={24}
                    width={24}
                    className="text-gray-500"
                  />
                );
              })}
            </div>
            <p className="text-xl font-medium">£{Number.parseFloat(String(price)).toFixed(2)}</p>
          </div>
        </div>
        <div className="self-end mt-6">
          <button className="bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { FC } from "react";

interface CartItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

export const CartItem: FC<CartItemProps> = ({ id, name, image, price }) => {
  return (
    <div className="flex gap-8">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="flex justify-between flex-grow">
        <div className="flex flex-col justify-evenly">
          <h4>{name}</h4>
          <div className="flex gap-4 items-center">
            <p>quantity</p>
            <div className="flex justify-between gap-4 items-center">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded">
                -
              </button>
              <span>1</span>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>£{price}</p>
        </div>
      </div>
    </div>
  );
};

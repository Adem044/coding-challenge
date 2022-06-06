import React, { FC, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  removeOneItem,
  addOneItem,
  applyDiscount,
  removeDiscount,
  CartItem as CartItemType,
} from "../../redux";

export const CartItem: FC<CartItemType> = ({
  id,
  product,
  quantity,
  price,
  discountApplied,
}) => {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    dispatch(addOneItem(product.id));
    const offer = product.offers.find(
      (offer) => offer.minQuantity <= quantity + 1
    );
    if (offer && !discountApplied) {
      dispatch(
        applyDiscount({ productId: product.id, discount: offer.discount })
      );
    }
  };
  const onRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };
  const onRemoveOneItem = () => {
    dispatch(removeOneItem(product.id));
    const offer = product.offers.find(
      (offer) => offer.minQuantity <= quantity - 1
    );
    if (!offer && discountApplied) {
      dispatch(removeDiscount(product.id));
    }
  };
  return (
    <div className="flex gap-8">
      <div className="h-[140px] w-[140px] rounded-full">
        <img className="h-full w-full rounded-full" src={product.image} alt={product.name} />
      </div>
      <div className="flex justify-between flex-grow">
        <div className="flex flex-col justify-evenly">
          <h4>{product.name}</h4>
          <div className="flex gap-4 items-center">
            <p>quantity</p>
            <div className="flex justify-between gap-4 items-center">
              <button
                onClick={quantity === 1 ? onRemoveFromCart : onRemoveOneItem}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={onAddToCart}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>£{price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

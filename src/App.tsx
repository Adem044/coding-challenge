import { useState } from "react";
import { ProductsList } from "./PriceCalculation/Products/ProductsList";
import { CartItems } from "./PriceCalculation/Cart/CartItems";

function App() {
  return (
    <div className="flex">
      <ProductsList />
      <CartItems />
    </div>
  );
}

export default App;

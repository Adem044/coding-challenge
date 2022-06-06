import { useState } from "react";
import { ProductsList } from "./PriceCalculation/Products/ProductsList";
import { CartItems } from "./PriceCalculation/Cart/CartItems";
import { Provider } from "react-redux";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="flex m-10 gap-10">
        <ProductsList />
        <CartItems />
      </div>
    </Provider>
  );
}

export default App;

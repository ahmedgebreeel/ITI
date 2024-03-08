import { useState } from "react";
import CartItem from "./CartItem";
import MyCounter from "./MyCounter";

const Cart = ({ products, Increment, Decrement, Delete, Reset }) => {
  return (
    <div>
      {!products.length && <h2>no Items</h2>}

      <div>
        {products.map((product) => (
          <CartItem
            key={product.name}
            product={product}
            Increment={Increment}
            Decrement={Decrement}
            Delete={Delete}
          />
        ))}
        <button onClick={Reset} className="border border-blue-500 m-5 p-3">
          Reset
        </button>
      </div>
      {/* <MyCounter/> */}
    </div>
  );
};

export default Cart;

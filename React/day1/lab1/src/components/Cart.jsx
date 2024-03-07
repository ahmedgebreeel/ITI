import { useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const [products, setProducts] = useState([
    { name: "Burger", counter: 0 },
    { name: "Fries", counter: 0 },
    { name: "Water", counter: 0 },
  ]);

  const Increment = (product) => {
    //clone
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.name === product.name); //// get the index
    newProducts[index] = { ...newProducts[index] }; ////deep clone
    //edit
    newProducts[index].counter += 1;
    //set state
    setProducts(newProducts);
  };

  const Decrement = (product) => {
    // // clone
    // let newProducts = [...products];

    //edit
    let newProducts = products.map((p) => {
      if (p.name === product.name) {
        p = { ...p, counter: (p.counter -= 1) };
      }
      return p;
    });

    //set state
    setProducts(newProducts);
  };

  const Delete = (product) => {
    /// filer => it does clone so i don't need to clone
    //clone and edit
    let newProducts = products.filter((p) => p.name != product.name);
    //set state
    setProducts(newProducts);
  };

  const Reset = () => {
    //clone
    let newProducts = [...products];
    //edit
    newProducts = newProducts.map((product) => {
      return { ...product, counter: 0 };
    });
    //setState
    setProducts(newProducts);
  };
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
    </div>
  );
};

export default Cart;

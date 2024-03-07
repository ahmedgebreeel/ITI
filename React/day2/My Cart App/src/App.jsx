import { useState } from "react";
import Cart from "./components/Cart"
import Navbar from './components/Navbar';



function App() {
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
    <>
     <Navbar itemsInCart={products.length} />
     <Cart products={products} Increment={Increment} Decrement={Decrement}  Delete={Delete} Reset={Reset} />
    </>
  )
}

export default App

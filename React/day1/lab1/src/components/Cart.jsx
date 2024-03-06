import { useState } from "react";
import CartItem from "./CartItem";


const Cart = () => {
    const [products, setProducts] = useState([
      { name: "Burger", counter: 0 },
      { name: "Fries", counter: 0 },
      { name: "Water", counter: 0 },
    ]);
  return (
    <div>
      {products.map(product => <CartItem key={product.name}/>)}
    </div>
  );
};

export default Cart;

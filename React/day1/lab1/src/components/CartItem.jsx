import { useState } from "react";

const CartItem = ({product, Increment, Decrement})=>{
    
   

    return (
        <div className="border m-5 p-2">
            <span className="border border-red-500 red p-2 m-3">{product.name}</span>
            <span className="border border-b-black m-5 p-3">{product.counter}</span>
            <button onClick={()=>Increment(product)} className="border border-blue-500 m-5 p-3">+</button>
            <button onClick={()=>Decrement(product)} className="border border-blue-500 m-5 p-3">-</button>

        </div>
    )
}

export default CartItem;
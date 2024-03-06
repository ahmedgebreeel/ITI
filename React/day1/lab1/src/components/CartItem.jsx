import { useState } from "react";

const CartItem = ()=>{
    const [data, setData] = useState({name: "Burger", counter: 0});

    const Increment = ()=>{
        // it is an obj so it 3 steps 
        // 1.cloning
        const newData = {...data};
        //2. edit
        newData.counter += 1;
        //3. setState
        setData(newData);
    }

    const Decrement = ()=>{
        //cloning
        const newData = {...data};
        // edit
        newData.counter -= 1;
        //setState
        setData(newData);
    };
    return (
        <div className="border m-5 p-2">
            <span className="border border-red-500 red p-2 m-3">{data.name}</span>
            <span className="border border-b-black m-5 p-3">{data.counter}</span>
            <button onClick={Increment} className="border border-blue-500 m-5 p-3">+</button>
            <button onClick={Decrement} className="border border-blue-500 m-5 p-3">-</button>

        </div>
    )
}

export default CartItem;
import React, { useState } from 'react'

export default function MyCounter() {
    const [counter, setCounter ] = useState(0);

    const PlusFive = ()=>{
        for (let index = 0; index < 5; index++) {
            setCounter((prevcounter)=>{return prevcounter+1});
        }
    }

  return (

    <div className="m-5 flex gap-10">
    <div className="border p-3 text-center border-black">{counter}</div>
    <button onClick={PlusFive} className="border  p-3 text-center border-yellow-300">+5</button>
    </div>

  )
}

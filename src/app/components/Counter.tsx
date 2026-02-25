"use client"

import { useState } from "react";

export default function Counter(){

const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);

return (
    <div className="flex items-center gap-4">
      
      <button onClick={decrement} className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
        -1
      </button>

     
      <span className="text-2xl font-bold min-w-[50px] text-center">{count}</span>

    
      <button onClick={increment} className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
        +1
      </button>
    </div>
  );
}
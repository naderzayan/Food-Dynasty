import React, { useState } from "react";
import { PiHandbagLight } from "react-icons/pi";
import '../style/if/_if.scss'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <PiHandbagLight /> {count}
            <p>Add To Cart: </p>
            <div className="count">
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            </div>
        </div>
    );
};

export default Counter;

import React, {useState} from "react";

function CounterFunction() {
    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);            
        }
    };

    return (
        <div className="counter">
            <h2>Function Component Counter</h2>
            <p>
                {count}
            </p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default CounterFunction;
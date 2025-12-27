import { useState } from "react";

const Counter = () => {
    const [counter, setCount] = useState(0);
    const hitplus = () => {
        setCount(counter + 1);
    }
    const [rCounter, setRcounter] = useState(100)
    return (
        <div>
            <h3>Counter :{counter}</h3>
            <button onClick={hitplus}>Click me </button>
            <h3>Reverse Counter : {rCounter}</h3>
            <button onClick={() => setRcounter(rCounter - 1)}>Click to reverse counter</button>
        </div>
    )
}

export default Counter
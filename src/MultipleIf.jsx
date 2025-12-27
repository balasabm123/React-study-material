import { useState } from "react";
const Control = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Multiple if conditions</h2>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Click me </button>
            {
                count == 0 ? <h1>condition 0</h1>
                    : count == 1 ? <h1>condition 1</h1>
                        : count == 2 ? <h1>condition 2</h1>
                            : count == 3 ? <h1>condition 3</h1>
                                : count == 4 ? <h1>condition 4</h1>
                                    : <h1>Other condition</h1>
            }
        </div>
    )
}
export default Control;
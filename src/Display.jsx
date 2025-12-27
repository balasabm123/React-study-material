import { useState } from "react";
const Display = () => {
    const [Show, DisplayShow] = useState(true);
    return (

        <div>
            <h3>Toggle in React</h3>
            <button onClick={() => DisplayShow(!Show)}>Hide and show</button>
            {
                Show ? <h2>Balasab M</h2> : null
            }
        </div>
    );
};
export default Display;
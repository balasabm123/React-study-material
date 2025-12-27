import { useState } from "react";

function DBind() {

    let [val, setValue] = useState('WELCOME');

    return (
        <div>
            <br></br>
            <h3>Get in put field value</h3>
            <input type="text" value={val} onChange={(e) => setValue(e.target.value)}></input>
            <h3>{val}</h3>
            <button onClick={() => setValue("")}>Clear text</button>
            <br></br>
        </div>
    );
}

export default DBind;
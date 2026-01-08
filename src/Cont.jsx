import { useState } from "react";
import Countsss from "./Countsss";

const Cont = () => {
    const [count, setCont] = useState(0)
    return (
        <div>
            <Countsss conts={count}></Countsss>
            <button onClick={() => setCont(count + 1)}>Counter</button>
        </div>
    )
}
export default Cont;
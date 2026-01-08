import { useEffect } from "react";

const Countsss = ({ conts }) => {

    const handleCounter = () => {
        console.log("Handle counter callled");
    }

    useEffect(() => {
        handleCounter();
    }, [])


    return (
        <div>
            <h4>count value is : {conts}</h4>
        </div>
    )
}
export default Countsss;
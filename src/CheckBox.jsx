import { useState } from "react";

function Checkbox() {
    let [skills, setSkills] = useState([]);
    const handleSkills = (e) => {
        console.log(e.target.value, e.target.checked);
        if(e.target.checked){
            setSkills([...skills,e.target.value]);
        }else{
            setSkills([...skills.filter((item)=>item!=e.target.value)])
        }

    }
    return (
        <div>
            <h2>Handle check box in react</h2>
            <h3>Select your skills</h3>
            <input type="checkbox" id="php" onChange={handleSkills} value="php"></input>
            <label htmlFor="php" >Php</label>
            <br></br>
            <input type="checkbox" id="html" onChange={handleSkills} value="html"></input>
            <label htmlFor="html" >HTML</label>
            <br></br>
            <input type="checkbox" id="js" onChange={handleSkills} value="js"></input>
            <label htmlFor="js" >JS</label>
            <br></br>
            <input type="checkbox" id="css" onChange={handleSkills} value="css"></input>
            <label htmlFor="css" >CSS</label>

            <h3>{skills.toString()}</h3>
        </div>
    )
}
export default Checkbox;
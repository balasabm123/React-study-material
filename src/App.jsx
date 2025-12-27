import { useState } from "react"
import Counter from "./Counter";
import Display from "./Display";
import Control from "./MultipleIf";
import Profs from "./Props";
import DBind from "./DataBind";
import ControlledComponent from "./ControlledComponent";
import Checkbox from "./CheckBox";
import RadioSelect from "./RadioSelect";
// 3 hours
function App() {

    const [fruite, setFruite] = useState("Apple");
    const handleFruite = () => {
        setFruite('Bannana');
    }
    let name = "Moahan Kumar";
    let age = 18;
    let email = "mayur332@gmail.com";

    let userObject = {
        "name": "Mohan kumara",
        "age": 18,
        "email": "test22@gmail.com"
    }
    let userObject1 = {
        "name": "Mohank kumara",
        "age": 35,
        "email": "Mohank22@gmail.com"
    }
    const getData = (msg) => console.log(msg);
    return (
        <div> 
            <h1>{fruite}</h1>
            <button onClick={handleFruite}>Click me to change</button>
            <hr></hr>
            <h3><Counter></Counter></h3>
            <hr></hr>
            <h4><Display></Display></h4>
            <hr></hr>
            <h4><Control></Control></h4>
            <hr></hr> 
            {/* <Profs name={name} age={age} email={email}></Profs> */}
             <Profs userObject={userObject}></Profs>
            <hr></hr>
            <Profs userObject={userObject1}></Profs>
            <hr></hr> 
            <DBind></DBind>  
            <hr></hr>  
            <ControlledComponent></ControlledComponent>
            <hr></hr> 
             <Checkbox></Checkbox>
             <hr></hr> 
            <RadioSelect></RadioSelect>
        </div>
    )

}

export default App
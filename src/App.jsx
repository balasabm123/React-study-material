import { useState } from "react"
import Counter from "./Counter";
import Display from "./Display";
import Control from "./MultipleIf";
import Profs from "./Props";
import DBind from "./DataBind";
import ControlledComponent from "./ControlledComponent";
import Checkbox from "./CheckBox";
import RadioSelect from "./RadioSelect";
import Loop from "./Loop";
import LoopComponent from "./LoopComponent";
import Clock from "./Clock";
import Nested from "./Nested_map";
import Nest from "./Nest";
import Cont from "./Cont";
import './css/style.css'; 
import Styles from "./Styles"
import Userefer from "./Userefer"
import UncontrolledC from "./UncontrolledC";
import Userinput from "./Userinput";

// 07:05 hours
function App() {

    const [fruite, setFruite] = useState("Apple");
    const [color, setColor] = useState('red');
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
    const userData = [
        {
            id: "1",
            name: "Balasab",
            age: "35",
            email: "Balasab333@gmail.com",
        },
        {
            id: "2",
            name: "Mohank",
            age: "25",
            email: "mohsnk333@gmail.com",
        },
        {
            id: "3",
            name: "Mohan",
            age: "45",
            email: "mohan333@gmail.com",
        },
        {
            id: "4",
            name: "Mayur",
            age: "35",
            email: "mayur333@gmail.com",
        },
    ];
    const getData = (msg) => console.log(msg);
    return (
        <div>
            {/* <h1>{fruite}</h1>
            <button onClick={handleFruite}>Click me to change</button>
            <hr></hr>
            <h3><Counter></Counter></h3>
            <hr></hr>
            <h4><Display></Display></h4>
            <hr></hr>
            <h4><Control></Control></h4>
            <hr></hr>
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
            <hr></hr>
            <Loop></Loop>
            <br></br>
            <hr></hr>
            <LoopComponent data={userData}></LoopComponent>
            <br></br>
            <hr></hr>
            <select onChange={(e) => setColor(e.target.value)}>
                <option value={"red"}> RED </option>
                <option value={"orange"}> Orange </option>
                <option value={"blue"}> Blue </option>
            </select>
            <Clock color={color}></Clock>
            <br></br>
            <hr></hr>
            <Nested></Nested>
            <br></br>
            <hr></hr>
            <hr></hr> */}
            {/* API call */}
            {/* <Nest></Nest> */}
            {/* API call */}
            {/* <hr></hr> */}
            {/* <Cont></Cont>
            <br></br>
            <hr></hr> */}
            {/* <Styles></Styles> */}
            {/* <Userefer></Userefer> */}
            {/* <UncontrolledC></UncontrolledC> */}
            <Userinput></Userinput>
        </div>
    )

}

export default App
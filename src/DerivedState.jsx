import { useState } from "react";
import { Button } from "react-bootstrap";

const DerivedState = ()=>{

const [users,setUsers]=useState([]);
const [user,setUser]=useState([]);
const handleAddUsers=()=>{
    setUsers([...users,user]);
}

const total = users.length;
const lastuser = users[users.length-1];
const unique = [...new Set(users)].length;
    return(
        <div>
            <h4>DerivedState.jsx</h4>
            <br></br>
            <br></br>
            <h4>Total User : {total}</h4>
            <h4>Last User : {lastuser}</h4>
            <h4>Unique total Users : {unique}</h4> 

            <br></br>
            <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder="Add new user" /> 
            <Button onClick={handleAddUsers}>Add user</Button>
            
            <br></br>
            <br></br>
            {
                users.map((item,index)=>(
                    <h4 key={index}>{item}</h4>
                ))
            }
        </div>
    )
}
export default DerivedState;
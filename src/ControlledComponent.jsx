import { useState } from "react";

function ControlledComponent() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const handleClear = () => {
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name"></input>
                <br></br>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"></input>
                <br></br>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"></input>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleClear}>
                    Clear
                </button>

            </form>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>
        </div>
    )
}

export default ControlledComponent;
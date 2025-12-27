import { useState } from "react";

function RadioSelect() {
    let [gender, setGender] = useState("female");
    let [city, SetCity] = useState("delhi");
    return (
        <div>
            <h2>Select gender</h2>
            <input type="radio" name="gender" checked={gender == "Male"} id="male" value={"Male"} onChange={(e) => setGender(e.target.value)} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" checked={gender == "Female"} id="female" value={"Female"} onChange={(e) => setGender(e.target.value)} />
            <label htmlFor="female">Female</label>

            <h3>Selected gender: {gender}</h3>

            <h2>Select city</h2>
            <select defaultValue={city} onChange={(e) => SetCity(e.target.value)}>
                <option value="bangalore">
                    Bangalore
                </option>
                <option value="delhi">
                    Delhi
                </option>
                <option value="chandigarh">
                    Chandigarh
                </option>
            </select>
            <h3>Selected city: {city}</h3>
        </div>
    )
}
export default RadioSelect; 
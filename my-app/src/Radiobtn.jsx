import React, { useState } from "react";
const Radiobtn = () => {
    const [radio, setRadio] = useState("Male");
    const [city, setCity] = useState()
    const change = (event) => {
        setRadio(event.target.value)
    }
    return (
        <>

            <h1>Select Gender {radio}</h1>
            <input type="radio" onChange={change} checked={radio == "Male"} id="male" name="btn" value="Male" />
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={change} checked={radio == "Female"} name="btn" id="female" value="Female" />
            <label htmlFor="female">Female</label>
            <br />

            <h1>Select City </h1>
            <select  defaultValue={"Phalastine"} onChange={(event) => { setCity(event.target.value) }}>
                <option value="Pakistan">Pakistan</option>
                <option  value="Arab" >Arab</option>
                <option value="Phalastine" >Phalastine</option>
            </select>
            <h1>{city}</h1>

        </>
    )
}
export default Radiobtn;
import React, { useState } from "react";

const Checkbox = () => {
    const [check, setCheck] = useState([]);
    const handlecheck = (event) => {
        console.log(event.target.value,event.target.checked);
        if (event.target.checked) {
            setCheck([...check,event.target.value])
        }else{
            setCheck([check,filter((item)=>item!=event.target.value)])
        }
    }



return (
    <>
        <input onChange={handlecheck} type="checkbox" name="" value="webdev" id="web" />
        <label htmlFor="web">webdev</label>
        <br />
        <br />
        <h1>{check.toString()}</h1>
    </>
)
}


export default Checkbox;
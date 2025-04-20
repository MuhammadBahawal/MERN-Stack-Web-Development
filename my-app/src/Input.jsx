import React, { useState } from 'react'

const Input = () => {
    const [value, setValue] = useState("")
  return (
   <>

   <input type="text" name="" id="" value={value} onChange={(event)=>setValue(event.target.value)} placeholder='Enter the Value'/>
   <h1>{value}</h1>
    {/* button to remove writtent text  */}
    
    {/* button to remove writtent text  */}
    <button onClick={()=>setValue("")}>Remove</button>
   </>
  )
}

export default Input

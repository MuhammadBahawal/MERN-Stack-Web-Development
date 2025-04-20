import React from 'react'
import { useState } from 'react';

const Display = () => {
    const[Display , setDisplay] = useState(true)
    let content ;
    if (Display) {
        content = "this is content"
    }
    else {
        content = null
    }
  return (
    <div>
      
        {/* <h1>{content}</h1> */}
      <button onClick={()=>setDisplay(!Display)}>click</button>
      <br />
       <h1> {Display ? content : null} </h1>
    </div>
  )
}

export default Display

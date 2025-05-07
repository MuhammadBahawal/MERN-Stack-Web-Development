import React, { useState } from 'react'

const Usestate = () => {
  const [fruite,setFruite] = useState("Apple")

  function change(){
    setFruite("Orange")
  }
  return (
    <div>
      <h1>{fruite}</h1>
      <button onClick={change}>Change</button>
    </div>
  )
}

export default Usestate

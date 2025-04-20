import React, { useState } from 'react'

const Controledcomponent = () => {
  const [text , setText] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  return (
    <div>
      <form action="">
        <label htmlFor="Inser credentials">Inser credentials: </label>
        <input value={text} onChange={(event)=>{setText (event.target.value)}} type="text"  /> <br />
        <label htmlFor="Inser credentials">Inser credentials: </label>
        <input value={email} onChange={(event)=>setEmail (event.target.value)} type="email" /> <br />
        <label htmlFor="Inser credentials">Inser credentials: </label>
        <input value={password} onChange={(event)=>setPassword (event.target.value)} type="password" />

        <button onClick={()=>{setText("");setEmail("");setPassword("")}}>Clear</button>

      </form>
    </div>
  )
}

export default Controledcomponent

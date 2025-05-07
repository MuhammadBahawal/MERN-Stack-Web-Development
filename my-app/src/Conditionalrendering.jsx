import React, { useState } from 'react'

const Conditionalrendering = () => {
    const [login , setLogin] = useState(false)
  return (
    <div>
      <h1>
        {login?"welcome":"please login"}
        
      </h1>
      <button onClick={()=>setLogin(!login)}>
        {login? "logout":"login"}
      </button>
    </div>
  )
}

export default Conditionalrendering

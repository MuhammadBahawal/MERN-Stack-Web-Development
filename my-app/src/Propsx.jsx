import React from 'react'

const Propsx = (Props) => {
  return (
    <div>
      
      <h1>{Props.text}</h1>
      <p>This is a Propsx component!</p>
      <img src={Props.src} alt="" />

    </div>
  )
}

export default Propsx
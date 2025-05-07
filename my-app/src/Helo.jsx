import React from 'react'

const Helo = (Props) => {
  return (
    <div>
      <h1>{Props.name}</h1>
      <img src={Props.imageurl} alt="" srcset="" />
    </div>
  )
}

export default Helo

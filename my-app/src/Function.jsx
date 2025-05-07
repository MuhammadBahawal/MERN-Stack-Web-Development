import React from 'react'
import Helo from './Helo'

const Function = () => {

let fruite = "Apple"

function hello(){
  console.log("hello world")
  fruite = "mango"
  console.log(fruite)
}

  return (
    <div>
      <h1>{fruite}</h1>
      <button onClick={hello}>click me</button>
    </div>
  )
}

export default Function

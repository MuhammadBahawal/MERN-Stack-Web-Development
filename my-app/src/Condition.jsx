import React, { use, useState } from 'react'

const Condition = () => {
    const [count,setCount] = useState(8)

  return (
   <>
   <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    {
        count ==0?<h1>count:{count}</h1>
        :count==1?<h1>count:{count}</h1>        
        :count==2?<h1>count:{count}</h1>        
        :count==3?<h1>count:{count}</h1>        
        :count==4?<h1>count:{count}</h1>        
        :count==5?<h1>count:{count}</h1>:null        

    }
   </>
  )
}

export default Condition

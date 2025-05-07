import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count, setCount] = useState(0);
    const [less, setLess] = useState(0);

    useEffect(() => {
        console.log("hello this is useeffect hook this is use to handle the effect");

    }, []) // use for one time run because we use [] brackets it means it run one time  

    useEffect(()=>{
        console.log(`agr hm sirf 1 state ko chlana chahta hn hr clik pa or dosri
             ko ni chlana chahta  to hm is ko use krta hn `)
    },[less]) // [] ma us state ka name da deta hn ab yha pa ya message less pa chla ga count pa ni chla ga 
    //or agr hm brackets na lgae to default jesa pehla chlta ha wesa he chla ga
     return (
        <div>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>increment</button> <br />
            <h1>{less}</h1>
            <button onClick={() => setLess(less - 1)}>Decrement</button>
        </div>
    )
}

export default Useeffect

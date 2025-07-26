import React from 'react';
import Function from './Function';
import Defaultprops from './Defaultprops';
import Usestate from './Usestate';
import Conditionalrendering from './Conditionalrendering';
import Array from './Array';
import Propsx from './Propsx';
import './styles.css';
import Object from './Object';
import Useeffect from './Useeffect';
import Usereff from './Usereff';
import Uncuntroledcomponent from './Uncuntroledcomponent';
import Test1 from './Test1';
import Lifting from './Lifting';

function App() {
  let arr = ["hello", 20, 10, 234];

  let obj = {
    Name: "Ali",
    age: 20
  };

  const change = (name)=>{
    console.log("hello thi is lifting" , name)
  }
  const differ = (name)=>{
    console.log("hello thi is lifting" , name)
  }


  return (
    <>
      {/* <h1 className='bg-red-600'>hello world</h1> */}
      {/* <Props data={arr} /> */}
      {/* <Condition /> */}
      {/* <Input /> */}
      {/* <Defaultprops /> */}
      {/* <Controledcomponent /> */}
      {/* <Checkbox /> */}
      {/* <Radiobtn /> */}
      {/* <Loop /> */}
      {/* <Componentloop /> */}
      {/* <Propsx text="hello world" /> */}
      {/* <Usestate /> */}
      {/* <Conditionalrendering /> */}
      {/* <Array arr={arr} /> */}
      {/* <Propsx src="src/assets/logo.jpg" /> */}
      {/* <Object obj={obj} /> */}
      {/* <Function /> */}


      {/* <Useeffect /> */}

      {/* <Usereff/> */}
      {/* <Uncuntroledcomponent/> */}
      
      {/* <Usereff/> */}
      {/* <Test1/> */}

      {/* <Lifting onchange = {change}/>
      <Lifting prop = {differ}/> */}

      <Usereff/>

      
      
      
    </>
  );
}

export default App;

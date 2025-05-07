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

function App() {
  let arr = ["hello", 20, 10, 234];

  let obj = {
    Name: "Ali",
    age: 20
  };

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

      <Usereff/>
    </>
  );
}

export default App;

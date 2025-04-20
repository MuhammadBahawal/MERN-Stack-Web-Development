import React from 'react';
import Defaultprops from './Defaultprops';
import Controledcomponent from './Controledcomponent';
import Checkbox from './Checkbox';
import Radiobtn from './Radiobtn'
import Input from './Input';
import Loop from './Loop';
import Componentloop from './Componentloop';
function App() {
  let arr = ["Adeel", 29, "BSSE"];

  return (
    <>
      {/* <Props data={arr} />
      <Props data={logo} />   */}
      {/* <Condition /> */}
      {/* <Input/> */}
      {/* <Defaultprops/> */}
      {/* <Controledcomponent/> */}
      {/* <Checkbox/> */}
      {/* <Radiobtn/> */}
      {/* <Loop/> */}
      <Componentloop/>
    </>
  );
}

export default App;

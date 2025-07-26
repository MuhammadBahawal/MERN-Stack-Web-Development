import React from 'react'

const Uncuntroledcomponent = () => {

    const handlevalue = (e)=>{
        e.preventDefault();
        let a = document.querySelector('#data').value;
        alert(a);
    }
    // document.querySelector('#data').style.backgroundColor = 'red'
    // document.querySelector('#data').style.color = 'green'
    // document.querySelector('#data').style.backgroundColor = 'red'

    
  return (
    <div>
      <p>is ma hm react ma inputs fields ke values ko direct dom sa handle krta hn
        na k hm state ka use krta hn is ma hm use ref ka use b kr skta hn
      </p>
      <form action="" onSubmit={handlevalue}>
        <input type="text" name="" id="data" /><br /> <br />
        <input type="submit" name="" id="" />
      </form>
    </div>
  )
}

export default Uncuntroledcomponent

import './App.css';
import { useState } from 'react';
import "./owner.css"

const Owner=()=>{
  let [canwithdraw, setCanWithdraw] = useState('');
  let[address,setaddress]=useState('');
  let[areasize,setareasize]=useState('');
  let[name,setName]=useState('');
  let[areaname,setAreaname]=useState('');
  let[farmer,setfarmer]=useState('');


  const handleChange = event => {
    setCanWithdraw(event.target.value);
    console.log('value is:', event.target.value);
    const A=event.target.value
  };

  const handleaddress=event=>{
    setaddress(event.target.value);
    console.log('value is:', event.target.value);
    const A=event.target.value
  }

  const handleareasize=event=>{
    setareasize(event.target.value);
    console.log('value is:', event.target.value);
    const B=event.target.value
  }

  const handleName=event=>{
    setName(event.target.value);
    console.log('value is:', event.target.value);
    const C=event.target.value
  }

  const handleAreaname=event=>{
    setAreaname(event.target.value);
    console.log('value is:', event.target.value);
    const D=event.target.value
  }

  const handleFarmer=event=>{
    setfarmer(event.target.value)
    console.log('Declared as farmer-', event.target.value);
    const farmer=event.target.value
  }

  return (
    <div className="App">
      <h1>Owner</h1>
      <input 
      type="hidden"
      id="message"
      name="message"
      onChange={handleChange}
      value={canwithdraw}>
      </input>
      <p className='own-head'>Can withdraw amount: {canwithdraw}</p>
      <button onClick={()=>canwithdraw}>withdraw</button>
      <div>
      <p className='own-head'>Address: {address}</p>
      <input 
      type="text"
      id="message"
      name="message"
      className='own-msg'
      placeholder='Address'
      onChange={handleaddress}
      value={address}></input>
      </div>
      <div>
        <p className='own-head'>Area size: {areasize}</p>
       <input 
      type="text"
      id="message"
      name="message"
      placeholder='Area size'
      className='own-msg'
      onChange={handleareasize}
      value={areasize}></input>
      {/* <button onClick={()=>areasize}>areasize</button> */}
      </div>
      <div>
        <p className='own-head'>Name: {name}</p>
       <input 
      type="text"
      id="message"
      name="message"
      className='own-msg'
      placeholder='Farmer/Activist Name'
      onChange={handleName}
      value={name}></input>
          {/* <button onClick={()=>name}>name</button> */}
      </div>
      <div>
        <p className='own-head'>Area name:{areaname}</p>
       <input 
      type="text"
      id="message"
      name="message"
      placeholder='Area name'
      className='own-msg'
      onChange={handleAreaname}
      value={areaname}></input>
      {/* <button onClick={()=>areaname}>area name </button> */}
      {/* <input 
      onChange={handleFarmer}
      value={farmer}></input> */}
      </div>
      <button onClick={()=>farmer}>Declared as farmer</button>
      <button onClick={()=>farmer}>Declared as Activist</button>
    </div>
  );
}

export default Owner;
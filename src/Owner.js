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
      <h1>Hello Admin</h1>
      <div>
      <p className='own-head'>Metamask Address: {address}</p>
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
        <p className='own-head'>Funded a particular amount(Yes/No) {areasize}</p>
       <input 
      type="text"
      id="message"
      name="message"
      placeholder='Fund Amount'
      className='own-msg'
      onChange={handleareasize}
      value={areasize}></input>
      {/* <button onClick={()=>areasize}>areasize</button> */}
      </div>
      <div>
        <p className='own-head'>Approve Student/Mentor {name}</p>
       <input 
      type="text"
      id="message"
      name="message"
      className='own-msg'
      placeholder='Student/Mentor Name'
      onChange={handleName}
      value={name}></input>
          {/* <button onClick={()=>name}>name</button> */}
      </div>
      <button className='own-msg' onClick={()=>farmer}>Declared as Student</button>
      <button className='own-msg' onClick={()=>farmer}>Declared as Mentor</button>
    </div>
  );
}

export default Owner;
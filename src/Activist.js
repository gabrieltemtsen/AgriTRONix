import './App.css';
import { useState } from 'react';
import withdrawFarmer from './withdrawFarmer';
import DepositFarmer from './DepositFarmer';
import VoteFarmer from './VoteFarmer';
import NameFarmer from './NameFarmer';
import Areaname from './Areaname';
import "./farmer.css"

const Activist=()=>{
  let [withdraw, setWithdraw] = useState('');
  let[deposit,setDeposit]=useState('');
  let[vote,setVote]=useState('');
  let[name,setName]=useState('');
  let[areaname,setAreaname]=useState('');
  let[AreaAffected,setAreaAffected]=useState('')

  const handleChange = event => {
    setWithdraw(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleDeposit=event=>{
    setDeposit(event.target.value);
    console.log('value is:', event.target.value);
  }

  const handleVote=event=>{
    setVote(event.target.value);
    console.log('value is:', event.target.value);
  }

  const handleName=event=>{
    setName(event.target.value);
    console.log('value is:', event.target.value);
  }

  const handleAreaname=event=>{
    setAreaname(event.target.value);
    localStorage.setItem('affected',event.target.value)
  
    console.log('value is:', event.target.value);
  }

  const handleAreaaffected=event=>{
    setAreaAffected(event.target.value);
    localStorage.setItem('affected1',event.target.value)
  
    console.log('value is:', event.target.value);
  }

  return (
    <div className="App">
      <h1>Activist</h1>
      <div>
      <p className='f-head' >Withdraw amount: {withdraw}</p>
      <button onClick={withdrawFarmer}{...()=>withdraw}>withdraw</button>
        </div>
      <input 
      type="hidden"
      id="message"
      name="message"
      className='txt-msg'
      // placeholder='Deposit amount'
      onChange={handleChange}
      value={withdraw}>
      </input>
      <div>
        <p className='f-head'>Deposit amount: {deposit}</p>
      <input 
      type="text"
      id="message"
      name="message"
      className='txt-msg'
      placeholder='Deposit amount'
      onChange={handleDeposit}
      value={deposit}></input>
        <button onClick={DepositFarmer}{...()=>deposit}>Deposit</button>
        </div>
        <div>
          <p className='f-head'>Vote: {vote}</p>
       <input 
      type="text"
      id="message"
      name="message"
      className='txt-msg'
      placeholder='Vote'
      onChange={handleVote}
      value={vote}></input>
      <button onClick={VoteFarmer}{...()=>vote}>Vote</button>
       </div>
       <div>
         <p className='f-head'>Claim name: {name}</p>
       <input 
      type="text"
      id="message"
      name="message"
      className='txt-msg'
      placeholder='Name'
      onChange={handleName}
      value={name}></input>
      <button onClick={NameFarmer}{...()=>name}>Name</button>
      </div>
      <p className='f-head'>Area name:{areaname}</p>
       <input 
      type="text"
      id="message"
      name="message"
      className='txt-msg'
      placeholder='Area name'
      onChange={handleAreaname}
      value={areaname}></input>
      <input 
      type="text"
      id="message"
      name="message"
      className='txt-msg'
      placeholder='Affected Area'
      onChange={handleAreaaffected}
      value={AreaAffected}></input>
      <button onClick={Areaname}>Area name </button>
    </div>
  );
}

export default Activist;
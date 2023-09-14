import './App.css';
import { useState} from 'react';
import withdrawFarmer from './withdrawFarmer';
import DepositFarmer from './DepositFarmer';
import VoteFarmer from './VoteFarmer';
import NameFarmer from './NameFarmer';
import claimActivist from './claimActivist';
import "./farmer.css"



const Farmer=()=>{
  let [withdraw, setWithdraw] = useState('');
  let[deposit,setDeposit]=useState('');
  let[vote,setVote]=useState('');
  let[name,setName]=useState('');
  let[claimactivist,setClaimactivist]=useState('');

  const handleChange = event => {
    setWithdraw(event.target.value);
    console.log('value is:', event.target.value);
    const A=event.target.value
  };

  const handleDeposit=event=>{
    setDeposit(event.target.value);
    localStorage.setItem('funding',event.target.value)
    console.log('value is:', event.target.value);
    const A=event.target.value
  }

  const handleVote=event=>{
    setVote(event.target.value);
    localStorage.setItem('vote',event.target.value)
    console.log('value is:', event.target.value);
    const B=event.target.value
  }

  const handleName=event=>{
    setName(event.target.value);
    localStorage.setItem('rname',event.target.value)
    console.log('value is:', event.target.value);
    const C=event.target.value
  }

  const handleActivist=event=>{
    setClaimactivist(event.target.value);
    console.log('value is:', event.target.value);
    const D=event.target.value
}

  return (
    <div className="App">
        <h1>Hello Farmer</h1>
        <input 
      type="hidden"
      id="message"
      className='txt-msg'
      placeholder='Deposit amount'
      name="message"
      onChange={handleChange}
      value={deposit}></input>
<button onClick={withdrawFarmer}{...()=>withdraw}>withdraw</button>
      <div>
      <p class="f-head">Deposit amount: {deposit}</p>
      <input 
      type="text"
      id="message"
      className='txt-msg'
      placeholder='Deposit amount'
      name="message"
      onChange={handleDeposit}
      value={deposit}></input>
      <button onClick={DepositFarmer}{...()=>deposit}>Deposit</button>
      </div>
      <div>
      <p class="f-head">vote: {vote}</p>
       <input 
      type="text"
      id="message"
      placeholder='Vote for activist'
      className='txt-msg'
      name="message"
      onChange={handleVote}
      value={vote}></input>
      <button onClick={VoteFarmer}{...()=>vote}>Vote</button>
      </div>
      <p class="f-head">view name: {name}</p>
       <input 
      className='txt-msg'
      type="text"
      placeholder='User name'
      id="message"
      name="message"
      onChange={handleName}
      value={name}></input>
       <input 
       className='txt-msg'
       type="hidden"
       id="message"
       name="message"
       onChange={handleActivist}
       value={claimactivist}></input>
         <button onClick={NameFarmer}{...()=>name}>Name</button>
      <div className='with-depo'>
        </div>
      {/* <p class="f-head">claim activist: {claimactivist}</p> */}
      <button onClick={claimActivist}{...()=>claimactivist}>claim activist</button>
    </div>
  );
}

export default Farmer;
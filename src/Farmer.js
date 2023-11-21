import './App.css';
import { useState} from 'react';
import withdrawFarmer from './withdrawFarmer';
import DepositFarmer from './DepositFarmer';
import VoteFarmer from './VoteFarmer';
import NameFarmer from './NameFarmer';
import claimActivist from './claimActivist';
import "./farmer.css"



const Farmer=()=>{
  let [deposit, setDeposit] = useState('');
  let [name, setName] = useState('');
  let [address, setaddress] = useState('');
  let [Department, setDepartment] = useState('');
  let [Message, setMessage] = useState('');
  let [Mentor, setMentor] = useState('');
  let [Discipline, setDiscipline] = useState('');


  const handleDeposit = event => {
    setDeposit(event.target.value);
    console.log('value is:', event.target.value);
  }

  const handleName = event => {
    setName(event.target.value);
    console.log('value is:', event.target.value);
  }

  const handleAddress = event => {
    setaddress(event.target.value);
    console.log('value is:', event.target.value);
  }

  const handleDepartment = event => {
    setDepartment(event.target.value);
    console.log('value is:', event.target.value);
  }

  const handleMessage = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  }

  const handleMentor = event => {
    setMentor(event.target.value);
    console.log('value is:', event.target.value);
  }

  const handleDiscipline = event => {
    setDiscipline(event.target.value);
    console.log('value is:', event.target.value);
  }



  return (
    <div className="App">
      <h1>Hello Mentor</h1>
      <div>
        <p className='f-head'>Name:- {name}</p>
        <input
          type="text"
          id="message"
          name="message"
          className='txt-msg'
          placeholder='Name'
          onChange={handleName}
          value={name}></input>
      </div>
      <div>
        <p className='f-head'>Metamask Address:- {address}</p>
        <input
          type="text"
          id="message"
          name="message"
          className='txt-msg'
          placeholder='Student Metamask Address'
          onChange={handleAddress}
          value={address}></input>
      </div>
      <div>
        <p className='f-head'>Department:- {Department}</p>
        <input
          type="text"
          id="message"
          name="message"
          className='txt-msg'
          placeholder='Department'
          onChange={handleDepartment}
          value={Department}></input>
      </div>
      <div>
        <p className='f-head'>Message:- {Message}</p>
        <input
          type="text"
          id="message"
          name="message"
          className='txt-msg'
          placeholder='Message'
          onChange={handleMessage}
          value={Message}></input>
      </div>
      <div>
        <p className='f-head'>Student Name:- {Mentor}</p>
        <input
          type="text"
          id="message"
          name="message"
          className='txt-msg'
          placeholder='Student Name'
          onChange={handleMentor}
          value={Mentor}></input>
      </div>
      <div>
        <p className='f-head'>Any Indisciplinary action(Yes/No):- {Discipline}</p>
        <input
          type="text"
          id="message"
          name="message"
          className='txt-msg'
          placeholder='Discipline'
          onChange={handleDiscipline}
          value={Discipline}></input>
      </div>
      <div>
        <p className='f-head'>Deposit amount:- {deposit}</p>
        <input
          type="text"
          id="message"
          name="message"
          className='txt-msg'
          placeholder='Deposit amount'
          onChange={handleDeposit}
          value={deposit}></input>
        <button onClick={DepositFarmer}{...() => deposit}>Deposit</button>
      </div>
    </div>
  );
}

export default Farmer;
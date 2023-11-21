import './App.css';
import { useState } from 'react';
import withdrawFarmer from './withdrawFarmer';
import DepositFarmer from './DepositFarmer';
import VoteFarmer from './VoteFarmer';
import NameFarmer from './NameFarmer';
import Areaname from './Areaname';
import "./farmer.css"

const Activist = () => {
  let [deposit, setDeposit] = useState('');
  let [name, setName] = useState('');
  let [RollNo, setRollNo] = useState('');
  let [Department, setDepartment] = useState('');
  let [Message, setMessage] = useState('');
  let [Mentor, setMentor] = useState('');

  const handleDeposit = async (event) => {
    setDeposit(event.target.value);
    console.log('value is:', event.target.value);
    try {
      // Create a data object with the form values
      const data = {
        name,
        roll_no: RollNo,
        Department,
        Message,
        mentor_name: Mentor,
        deposit_amount: deposit,
      };

      // Send a POST request to your backend to save the data
      const response = await fetch('/routes/depositRoutes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle successful deposit confirmation
        console.log('Deposit recorded successfully');
        // You can reset the form fields here if needed
        setDeposit('');
        setName('');
        setRollNo('');
        setDepartment('');
        setMessage('');
        setMentor('');
      } else {
        // Handle error responses from the server
        console.error('Deposit request failed.');
      }
    } catch (error) {
      console.error('Error while processing deposit:', error);
    }
  };


  const handleName = event => {
    setName(event.target.value);
    console.log('value is:', event.target.value);
  }

  const handleRollNo = event => {
    setRollNo(event.target.value);
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


  return (
    <div className="App">
      <h1>Hello Student</h1>
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
        <p className='f-head'>Roll No:- {RollNo}</p>
        <input
          type="text"
          id="message"
          name="message"
          className='txt-msg'
          placeholder='RollNo'
          onChange={handleRollNo}
          value={RollNo}></input>
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
        <p className='f-head'>Mentor Name:- {Mentor}</p>
        <input
          type="text"
          id="message"
          name="message"
          className='txt-msg'
          placeholder='MentorName'
          onChange={handleMentor}
          value={Mentor}></input>
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

export default Activist;
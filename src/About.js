import React,{useState} from 'react';
import address from './address';
import Screen from './Screen';
import "./about.css"
  
const About = () => {
    let [message, setMessage] = useState('');

    const handleChange = event => {
      setMessage(event.target.value);
      console.log('value is:', event.target.value);
      localStorage.setItem('funding',event.target.value);
      
    }
  return (
    <div>
      <h1 className='ab-text'>Connect your metamask wallet</h1>
      <h2 className='ad-text'>Steps to connect metamask</h2>
      <p className='p-text'>1.Install The Extension from chrome</p>
      <p className='p-text'>2.Setting Up Your MetaMask Wallet</p>
      <p className='p-text'>3.Take note of the secret recovery phrase  </p>
      <p className='p-text'>4.Keep both secret recovery phrase and password of metamask private</p>
     <p className='p-text'>7.Click on the connect button at the botton for connecting and funding our project</p>
      <div className='about-wrk'>
      <div >
       <button className='ab-connect' onClick={address}>Connect</button>
    </div>
      <input
        type="text"
        id="message"
        name="message"
        className='ab-message'
        placeholder='Fund-amount'
        onChange={handleChange}
        value={message}
      />
      <div>
       <button className='ab-fund' onClick={Screen}>fund</button>
       </div>
       </div>
    </div>
  );
};
  
export default About;
import React from 'react'; 
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import AnnualReport from './AnnualReport';
import Blogs from './Blogs';
import Signin from './Signin';
import SignInfarmer from './SignInFarmer';
import SignInOwner from './SignInOwner';

function App(){

  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/annual' element={<AnnualReport />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/signinActivist' element={<Signin />} />
        <Route path='/signinfarmer' element={<SignInfarmer/>} />
        <Route path='/signinowner' element={<SignInOwner />} />
      </Routes>
    </Router>
    </div>
  );
   
  
};

export default App;

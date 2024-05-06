import React from 'react';
import "./index.css";
import farmers from './Assets/farmers.png';
import farmers1 from './Assets/farmers1.jpg';
import tron from './Assets/tron.png'


const Home = () => {
  return (
    <div>
      <body>
        <h1 className='h4-home'>Welcome to AgriTRONix</h1>

        <p className='p-header'>Empowering Farmers with Blockchain-Driven Insurance</p>

        <h2 className='h5-home'>Our Features:</h2>
        <div className="content-with-image">
          <div className="text-content">

            <p className='p-homes'><strong className='header'>1. Smart Contract Insurance:</strong> Utilize blockchain-enabled smart contracts that automatically execute and process claims without human intervention, ensuring swift and accurate insurance payouts.</p>

            <p className='p-homes'><strong className='header'>2. Multi-Role Access:</strong>Customized portals for farmers, activists, and owners support specific functionalities such as deposits, withdrawals, voting, and data entry, ensuring efficient interaction for all users.</p>

            <p className='p-homes'><strong className='header'>3. Decentralized Data Management:</strong> All farming data is stored on a secure, decentralized ledger, enhancing the integrity and accessibility of information critical to both farmers and insurers.</p>

            <p className='p-homes'><strong className='header'>4. Transparent Risk Assessment:</strong> Our platform provides transparent and equitable risk assessments using AI-driven analytics, ensuring fair premiums and coverage options for all farmers.</p>
          </div>
          <div className="image-content">
            <img src={farmers} alt="Description of First Image" />
          </div>
        </div>

        <h2 className='h5-home'>Why Choose Us:</h2>
        <div className="content-with-image">
          <div className="image-content">
            <img src={farmers1} alt="Description of Second Image" />
          </div>
          <div className="text-content">
            <p className='p-homes'><strong className='header'>1. Seamless Connectivity:</strong> Easily connect with farmers and activists from around the world in real-time.</p>

            <p className='p-homes'><strong className='header'>2. Secure Payments:</strong> Pay for your sessions securely with cryptocurrency, ensuring the safety of your financial information.</p>

            <p className='p-homes'><strong className='header'>3. Track Progress:</strong> Monitor your progress and milestones through our user-friendly dashboard.</p>

            <p className='p-homes'><strong className='header'>4. Community Engagement:</strong> Join a vibrant community of future farmers and activists and owners, fostering a culture of knowledge sharing.</p>

          </div>
        </div>

        <h2 className='h5-home'>Our Commitment to Farmers:</h2>
        <div className="content-with-image">
          <div className="text-content">

            <p className='p-homes'><strong className='header'>1. AgriTRONix Empowerment:</strong> Through our AgriTRON (TRON) blockchain, we are ready to throne with TRON network for the survival and prosperity of farmers by leveraging secure and transparent technology.</p>

            <p className='p-homes'><strong className='header'>2. Decentralized Support:</strong> Our blockchain technology decentralizes the support system, directly connecting farmers with the resources they need without intermediary delays or corruption.</p>

            <p className='p-homes'><strong className='header'>3. Tailored Solutions:</strong> Each solution is crafted to address the specific challenges faced by our farmers, ensuring that our interventions are as effective as possible.</p>

            <p className='p-homes'><strong className='header'>4. Transparent Advocacy:</strong> Every transaction and support activity is recorded on the blockchain, ensuring that every contribution towards farmer advocacy is visible and accountable</p>
          </div>
          <div className="image-content">
            <img src={tron  } alt="Description of First Image" />
          </div>
        </div>

        <h2 className='h5-home'>Join the Revolution in Farming Support!</h2>

        <p className='p-homes'>Seize the opportunity to empower your agricultural operations. Become part of a community that leverages cutting-edge blockchain technology for farmer advocacy and support.</p><br></br>

        <strong className='header' >“Innovation is the key to the farmer's prosperity. Join us today to build a sustainable future for those who feed the world.”</strong>
        <br></br>
        <div className="button-container">
        <a href="/signinActivist" class="hero-btn">Sign In As Activist</a>
        <a href="/signinfarmer" class="hero-btn">Sign In As Farmer</a>
        <a href="/signinowner" class="hero-btn">Sign In As Owner</a>
        </div>
      </body>
    </div>
  );
};

export default Home;
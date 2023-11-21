import React from 'react';
import "./index.css";
import Mentor1Image from './Assets/mentor1.jpg';
import Mentor2Image from './Assets/mentor2.jpg';


const Home = () => {
  return (
    <div>
      <body>
        <h1 className='h4-home'>Welcome to MentorConnect</h1>

        <p className='p-header'>Welcome to our innovative blockchain-based peer-to-peer tutoring and mentoring platform.</p>

        <h2 className='h5-home'>Our Features:</h2>
        <div className="content-with-image">
          <div className="text-content">

            <p className='p-homes'><strong className='header'>1. Decentralized Learning:</strong> Harness the power of blockchain technology for secure, transparent, and decentralized learning experiences.</p>

            <p className='p-homes'><strong className='header'>2. Personalized Education:</strong> Tailor your learning experience by connecting with experienced mentors or tutors who match your unique needs.</p>

            <p className='p-homes'><strong className='header'>3. Verified Tutors and Mentors:</strong> We ensure that all our tutors and mentors are qualified and verified, giving you peace of mind.</p>

            <p className='p-homes'><strong className='header'>4. Transparent Transactions:</strong> Every tutoring session and payment is recorded on the blockchain for complete transparency and accountability.</p>
          </div>
          <div className="image-content">
            <img src={Mentor1Image} alt="Description of First Image" />
          </div>
        </div>

        <h2 className='h5-home'>Why Choose Us:</h2>
        <div className="content-with-image">
          <div className="image-content">
            <img src={Mentor2Image} alt="Description of Second Image" />
          </div>
          <div className="text-content">
            <p className='p-homes'><strong className='header'>1. Seamless Connectivity:</strong> Easily connect with tutors and mentors from around the world in real-time.</p>

            <p className='p-homes'><strong className='header'>2. Secure Payments:</strong> Pay for your sessions securely with cryptocurrency, ensuring the safety of your financial information.</p>

            <p className='p-homes'><strong className='header'>3. Track Progress:</strong> Monitor your progress and learning milestones through our user-friendly dashboard.</p>

            <p className='p-homes'><strong className='header'>4. Community Engagement:</strong> Join a vibrant community of learners and educators, fostering a culture of knowledge sharing.</p>

          </div>
        </div>

        <h2 className='h5-home'>Get Started Today!</h2>

        <p className='p-homes'>Don't miss out on the opportunity to take your education to the next level. Join our platform and unlock a world of peer-to-peer tutoring and mentoring.</p><br></br>

        <strong className='header'>"Education is the passport to the future, for tomorrow belongs to those who prepare for it today." - Malcolm X</strong>
        <br></br>
        <div className="button-container">
        <a href="/signinActivist" class="hero-btn">Sign In As Student</a>
        <a href="/signinfarmer" class="hero-btn">Sign In As Mentor</a>
        <a href="/signinowner" class="hero-btn">Sign In As Admin</a>
        </div>
      </body>
    </div>
  );
};

export default Home;
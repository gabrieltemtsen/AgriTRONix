import React from 'react';
import "./index.css";


const Home = () => {
  return (
    <div>
      <h1 className="header">CRYPTOGRAPHIC FARMING</h1>
      <p className='p-homes'>Our effort is made up of farmers (who lack the resources to buy land), landowners, and campaigners.

Farmers empower activists by casting their votes in DAOs, a blockchain offshoot. We utilise an algorithm that gives activists tokens and authority based on the votes of farmers. Activists do out research, look after the environment, and carefully examine farmers and their trustworthiness.

Landowners then identify and loan farmers in an analytical way with the aid of campaigners. We also assist farmers by providing them with loans and insurance to safeguard them. We are able to make money by analysing crop wealth, farmer labour force, harvested resource use, and farm product utilisation. In this case, we use cryptocurrency as an exchange token that is more reliable and safe..</p>

<h4 className="h4-home">"The Ultimate goal of Farming is growing of crops,but also the cultivation and perfection of human beings"</h4>

      <a href="/signinActivist" class="hero-btn">Sign In As Activist</a>
      <a href="/signinfarmer" class="hero-btn">Sign In As Farmer</a>
      <a href="/signinowner" class="hero-btn">Sign In  Owner</a>
      <a href="/login" class="hero-btn">Login</a>
      


      
      
    </div>
  );
};
  
export default Home;
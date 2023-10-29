import React from 'react';
import "./index.css";


const Home = () => {
  return (
    <div>
      <h1 className="header">Cryptographic farming</h1>
      <p className='p-homes'>Farmers (who lack the means to purchase property), landowners, and activists make up
our initiative.

By voting in DAOs, farmers give activists authority. We employ an algorithm in which
farmers' votes are used to grant activists authority and tokens. Activists conduct surveys,
care after the land, and conduct thorough study on farmers and their dependability.
Farmers are then loaned and identified by landowners in an analytical manner with the
help of activists. Additionally, we help the farmers by giving them loans and insurance,
which protects them. By analysing crop wealth, farmer labour force, harvested resource
use, and farm product usage, we are able to generate profits. As a more dependable and
secure exchange token in this situation, we employ XDC.</p>
<img src="https://i.ytimg.com/vi/0IGIA4wRkyQ/maxresdefault.jpg" className='img-home' />
<h1 className='h1-home'>"The Ultimate goal of Farming is not the growing of crops,but the cultivation and perfection of human beings"</h1>
      <a href="/signinActivist" class="hero-btn">Sign In As Activist</a>
      <a href="/signinfarmer" class="hero-btn">Sign In As Farmer</a>
      <a href="/signinowner" class="hero-btn">Sign In As Owner</a>
    </div>
  );
};

export default Home;
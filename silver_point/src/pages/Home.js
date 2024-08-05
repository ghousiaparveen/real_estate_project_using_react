import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import aashiyana from '../image/bg-image.jpg';
import dreamValley from '../image/bg-image1.jpg';
import shriShyamVihar from '../image/bg-image2.jpg';
const Home = () => {
  return (
   <div className='parentElement'>
    <div className="home" >

    <h1>Welcome to Silver Point Realty</h1>
  </div>
  <div className='aboutPWS'>
  <h1>Transforming Lives Through Affordable Plots</h1>
  <p>Welcome to an organization dedicated to changing lives for economically disadvantaged individuals and families.
     Our Affordable Plots initiative is more than just providing land; it’s about creating sustainable, thriving communities.</p>
  </div>
  <div className='Vision'>
    <p>We believe in empowering people to build their dreams. With our accessible living solutions, 
      we are paving the way for a brighter future. 
      Join us in our mission to foster vibrant neighborhoods where happy families can flourish.</p>
  </div>
  <div className='Mission'>
    <p>
    Explore our vision and see the lasting impact we’re making on communities in need.
    </p>
  </div>
  <div className='featured-projects'>
    <h1>Featured Projects</h1>
    <div className='image-row'>
      <div className='aa'>
      <NavLink to='/plt#Aashiyana'><img src={aashiyana} alt='Aashiyana'/><h3>Aashiyana</h3></NavLink>
      </div>
      <div className='dv'>
      <NavLink to='plt#dreamValley'><img src={dreamValley} alt='Dream Valley'/>
      <h3>Dream Valley</h3>
      </NavLink>
     
      </div>
      <div className='ssv'>
      <NavLink to='plt#shriShyamVihar'><img src={shriShyamVihar} alt='Shri Shyam Vihar'/><h3>Shri Shyam Vihar</h3></NavLink>
      </div>
    </div>
  </div>
   </div>
  );
};

export default Home;

// Section1.js
import React from 'react';
import '../SECTION1/section1.css';
import Navbar from './Navbar/Navbar';
import Mainsection from './Mainsection/Mainsection';
import Swiber from './SWIBER/Swiber';

import videoBg from '../IMAGES/2532720_White_Boxes_Cubes_1920x1080.mp4';

const Section1 = () => {
  return (
    <div className='section1' id='section1'>
      <div className="video-container">
        <video className="video-bg" src={videoBg} autoPlay loop muted />
      </div>
      <div className='overlay'></div>
      <div className='container content'>
        <Navbar />
        <Mainsection />
        <Swiber />
      </div>
    </div>
  );
};

export default Section1;

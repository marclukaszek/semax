import React from 'react';
import img1 from './assets/remontysemaxlink.png';
import img2 from './assets/pralniasemaxlink.png'
import './main.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='background__bg'>
      {/* Black screen styling */}
        {/* Image selection */}
        <div className='links_images'>
        <h1>Wybierz interesujący dział:</h1>
        <Link to="/pralnia">
        <img src={img2} alt="Pralnia Semax" />
        </Link>
        <Link to="/zrb">
        <img src={img1} alt="Zakład Remontowo-Budowlany Semax" />
        </Link>
        {/* ... and so on */}
        </div>
    </div>
  );
}

export default Main;
import React from 'react';
import "./footer.css";
import logo from '../assets/logos/Asset 20@4x.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='col-6 footer-first'>
          <img src={logo} alt='footer'/>
          <p>Copyright Reserved Little Lemon 2023</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
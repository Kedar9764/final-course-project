import React from 'react';
import logo from '../../assets/logos/Asset 16@4x.png';
import './Styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div class="header">
        <div class="logo">
          <img src={logo} alt="little-lemom-logo"/>
        </div>
        <div class="header-right">
            <Link to={'/'}><a href="#home">Home</a></Link>
            <Link to={'/reservation'}><a href="/reservation">Reservation</a></Link>
            <Link to={''}><a href="#about">About</a></Link>
        </div>
    </div>
  )
}

export default Header;
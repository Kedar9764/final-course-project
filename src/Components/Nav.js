import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Homepage</Link>
          </li>
          <li>
            <Link to={'/about'}>About Us</Link>
          </li>
          <li>
            <Link to={'/blog'}>Blog</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

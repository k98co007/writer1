import React from 'react';
import logo from '../img/logo.png' 

const Header: React.FC = () => {
  return <div className="header">
    <div className="logo-container">
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="title">
      <p>AVENGERS RESPONSIVE CARDS UI DESIGN</p>
      </div>
  </div>;
};

export default Header;

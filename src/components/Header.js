import React from 'react';
import ModalAbout from './Header/ModalAbout';
import ModalContact from './Header/ModalContact';
import ModalLoginOrRegistration from './Header/ModalLoginOrRegistration';

const Header = () => (
  <nav className="navbar navbar-expand-lg nav-style">
    <div className="container">
      <a className="navbar-brand" href="#">
        bgShop
      </a>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav">
          <ModalAbout />
          <ModalContact />
        </ul>
        <ul className="navbar-nav navbar-right ml-auto">
          <ModalLoginOrRegistration />
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;

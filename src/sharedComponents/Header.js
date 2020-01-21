import React from 'react';
import { Link } from 'react-router-dom';
import ModalAbout from './Header/ModalAbout';
import ModalContact from './Header/ModalContact';
import ModalLoginOrRegistration from './Header/ModalLoginOrRegistration';
import Logout from './Header/Logout';
import ViewAllUser from './Header/ViewAllUser';

const Header = () => (
  <nav className="navbar navbar-expand-lg nav-style">
    <div className="container">
      <Link className="navbar-brand" to="/">
        bgShop
      </Link>
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

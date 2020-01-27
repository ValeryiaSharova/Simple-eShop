import React from 'react';
import { Link } from 'react-router-dom';
import { ModalConsumer } from '../context/ModalContext';
import About from './Dialogs/About';
import Contact from './Dialogs/Contact';
import LoginOrReg from './Dialogs/LoginOrReg';
import Logout from './Header/Logout';
import ViewAllUser from './Header/ViewAllUser';

const Header = () => (
  <nav className="navbar navbar-expand-lg nav-style">
    <div className="container">
      <Link className="navbar-brand" to="/">
        bgShop
      </Link>
      <ModalConsumer>
        {({ showModal }) => (
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-nav mt-1"
                  onClick={() => showModal(About, { show: true })}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-nav mt-1"
                  onClick={() => showModal(Contact, { show: true })}
                >
                  Contact
                </button>
              </li>
            </ul>
            <ul className="navbar-nav navbar-right ml-auto">
              <li className="nav-item mr-2">
                <button
                  type="button"
                  className="btn btn-nav mt-1"
                  onClick={() => showModal(LoginOrReg, { show: true })}
                >
                  Login or Register
                </button>
              </li>
            </ul>
          </div>
        )}
      </ModalConsumer>
    </div>
  </nav>
);

export default Header;

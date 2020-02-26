import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';
import { ModalConsumer } from '../../context/ModalContext';
import About from '../Dialogs/About/About';
import Contact from '../Dialogs/Contact/Contact';
import LoginOrReg from '../Dialogs/LoginOrReg/LoginOrReg';
import LogoutButton from './LogoutButton';
import ViewAllUserButton from './ViewAllUserButton';
import AccountButton from './AccountButton';
import CartButton from './CartButton';

const Header = props => {
  const { addUser, login, logout, currentUser, cart } = props;
  const { role } = currentUser;

  return (
    <nav className="navbar nav-style navbar-expand-sm">
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
                    onClick={() => showModal(About)}
                  >
                    About
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-nav mt-1"
                    onClick={() => showModal(Contact)}
                  >
                    Contact
                  </button>
                </li>
              </ul>
              {role === 'user' ? (
                <ul className="navbar-nav navbar-right ml-auto">
                  <li className="nav-item mr-2 mt-1 nav-greeting">Hello, {currentUser.fname}</li>
                  <li className="nav-item mr-2">
                    <CartButton cart={cart} />
                  </li>
                  <li className="nav-item mr-2">
                    <AccountButton />
                  </li>
                  <li className="nav-item mr-2">
                    <LogoutButton logout={logout} />
                  </li>
                </ul>
              ) : (
                <div className="navbar-nav navbar-right ml-auto">
                  {role === 'admin' ? (
                    <ul className="navbar-nav navbar-right ml-auto">
                      <li className="nav-item mr-2">
                        <ViewAllUserButton />
                      </li>
                      <li className="nav-item mr-2">
                        <LogoutButton logout={logout} />
                      </li>
                    </ul>
                  ) : (
                    <ul className="navbar-nav navbar-right ml-auto">
                      <li className="nav-item mr-2">
                        <button
                          type="button"
                          className="btn btn-nav mt-1"
                          onClick={() => showModal(LoginOrReg, { addUser, login })}
                        >
                          Login or Register
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              )}
            </div>
          )}
        </ModalConsumer>
      </div>
    </nav>
  );
};

Header.propTypes = {
  addUser: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  role: PropTypes.string,
  cart: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  role: 'anon',
  cart: [],
};

export default Header;

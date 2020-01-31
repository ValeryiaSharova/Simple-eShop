import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';
import { ModalConsumer } from '../context/ModalContext';
import About from './Dialogs/About';
import Contact from './Dialogs/Contact';
import LoginOrReg from './Dialogs/LoginOrReg';
import Logout from './Header/Logout';
import ViewAllUser from './Header/ViewAllUser';

const Header = props => {
  const { addUser, login, logout, currentUser } = props;
  const { role } = currentUser;

  return (
    <nav className="navbar navbar-expand-lg nav-style">
      <div className="container">
        <Link className="navbar-brand" to="/page">
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
                  <Logout logout={logout} />
                </ul>
              ) : (
                <div className="navbar-nav navbar-right ml-auto">
                  {role === 'admin' ? (
                    <ul className="navbar-nav navbar-right ml-auto">
                      <ViewAllUser />

                      <Logout logout={logout} />
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
};

Header.defaultProps = {
  role: 'anon',
};

export default Header;

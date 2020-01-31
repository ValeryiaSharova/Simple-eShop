import React from 'react';
import PropTypes from 'proptypes';

const Logout = ({ logout }) => (
  <li className="nav-item mr-2">
    <button onClick={logout} type="button" className="btn btn-nav mt-1" id="logout-button">
      Logout
    </button>
  </li>
);

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Logout;

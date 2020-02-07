import React from 'react';
import PropTypes from 'proptypes';

const LogoutButton = ({ logout }) => (
  <button onClick={logout} type="button" className="btn btn-nav mt-1" id="logout-button">
    Logout
  </button>
);

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default LogoutButton;

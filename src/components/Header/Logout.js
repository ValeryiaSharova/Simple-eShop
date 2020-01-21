import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => (
  <li className="nav-item mr-2">
    <Link to="/">
      <button type="button" className="btn btn-nav mt-1" id="logout-button">
        Logout
      </button>
    </Link>
  </li>
);

export default Logout;

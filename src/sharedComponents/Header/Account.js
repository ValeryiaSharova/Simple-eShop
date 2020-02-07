import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => (
  <li className="nav-item mr-2">
    <Link to="/account">
      <button type="submit" className="btn btn-nav mt-1">
        Account
      </button>
    </Link>
  </li>
);

export default Account;

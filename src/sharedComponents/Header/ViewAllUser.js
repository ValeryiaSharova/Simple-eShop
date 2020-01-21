import React from 'react';
import { Link } from 'react-router-dom';

const ViewAllUser = () => (
  <li className="nav-item mr-2">
    <Link to="/table">
      <button type="submit" className="btn btn-nav mt-1">
        View all users
      </button>
    </Link>
  </li>
);

export default ViewAllUser;

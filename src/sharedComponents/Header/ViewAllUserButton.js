import React from 'react';
import { Link } from 'react-router-dom';

const ViewAllUserButton = () => (
  <Link to="/table">
    <button type="submit" className="btn btn-nav mt-1">
      View all users
    </button>
  </Link>
);

export default ViewAllUserButton;

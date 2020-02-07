import React from 'react';
import { Link } from 'react-router-dom';

const AccountButton = () => (
  <Link to="/account">
    <button type="submit" className="btn btn-nav mt-1">
      Account
    </button>
  </Link>
);

export default AccountButton;

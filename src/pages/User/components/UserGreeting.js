import React from 'react';
import PropTypes from 'proptypes';

const UserGreeting = ({ currentUser }) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container ">
      <h1 className="display-4 text-center">Hello, {currentUser.fname}</h1>
      <p className="lead text-justify text-center">
        Here you can change you name and delete your account.
      </p>
    </div>
  </div>
);

UserGreeting.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default UserGreeting;

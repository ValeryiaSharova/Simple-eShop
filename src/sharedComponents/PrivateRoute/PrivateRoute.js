import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'proptypes';

const PrivateRoute = ({ component: Component, currentUser, userRole }) => (
  <Route render={() => (currentUser.role === userRole ? <Component /> : <Redirect to="/" />)} />
);

const mapStateToProps = state => ({
  users: state.users.usersData,
  currentUser: state.users.currentUser,
});

PrivateRoute.propTypes = {
  userRole: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(PrivateRoute);

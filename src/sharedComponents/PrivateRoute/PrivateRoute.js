import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'proptypes';

const PrivateRoute = ({ component: Component, currentUser }) => (
  <Route render={() => (currentUser.role === 'admin' ? <Component /> : <Redirect to="/" />)} />
);

const mapStateToProps = state => ({
  users: state.users.usersData,
  currentUser: state.users.currentUser,
});

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(PrivateRoute);

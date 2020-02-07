import React from 'react';
import PropTypes from 'proptypes';
import ChangeNameForm from './components/ChangeNameForm';
import DeleteAccount from './components/DeleteAccount';
import AlreadyDeleteAccount from './components/AlreadyDeleteAccount';
import UserGreeting from './components/UserGreeting';
import Footer from '../../sharedComponents/Footer/Footer';

const UserAccount = ({ currentUser, changeName, requestForDelete }) => (
  <div className="container mt-3">
    <UserGreeting currentUser={currentUser} />
    <ChangeNameForm changeName={changeName} currentUser={currentUser} />
    {!currentUser.deleteRequest ? (
      <DeleteAccount requestForDelete={requestForDelete} currentUser={currentUser} />
    ) : (
      <AlreadyDeleteAccount />
    )}
    <hr />
    <Footer />
  </div>
);

UserAccount.propTypes = {
  currentUser: PropTypes.object.isRequired,
  changeName: PropTypes.func.isRequired,
  requestForDelete: PropTypes.func.isRequired,
};

export default UserAccount;

import React from 'react';
import PropTypes from 'proptypes';

const DeleteAccount = ({ requestForDelete, currentUser }) => {
  const request = e => {
    e.preventDefault();
    requestForDelete(currentUser.mail);
  };
  return (
    <div className="text-center delete-account">
      <h3>Do you want to delete you account?</h3>
      <button className="btn btn-modal mt-2 mb-2" onClick={request}>
        Delete
      </button>
    </div>
  );
};

DeleteAccount.propTypes = {
  requestForDelete: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default DeleteAccount;

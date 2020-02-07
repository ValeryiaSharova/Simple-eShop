import React from 'react';

const AlreadyDeleteAccount = () => (
  <div className="text-center delete-account">
    <h3>You have already sent a request.</h3>
    <button type="button" className="btn btn-modal mt-2 mb-2" disabled>
      Delete
    </button>
  </div>
);

export default AlreadyDeleteAccount;

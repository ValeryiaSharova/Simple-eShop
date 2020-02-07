import React, { useState } from 'react';
import PropTypes from 'proptypes';

const ChangeNameForm = ({ changeName, currentUser }) => {
  const [newName, setNewName] = useState({ ...currentUser });

  const handleCnahgeName = e => {
    setNewName({ ...newName, [e.target.name]: e.target.value });
  };

  const change = e => {
    e.preventDefault();
    changeName(newName);
    const form = e.target;
    form.reset();
  };

  return (
    <form onSubmit={change}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">First and last name</span>
        </div>
        <input
          name="name"
          onChange={handleCnahgeName}
          type="text"
          aria-label="First name"
          placeholder={currentUser.name}
          className="form-control"
        />
        <input
          name="fname"
          onChange={handleCnahgeName}
          type="text"
          aria-label="Last name"
          placeholder={currentUser.fname}
          className="form-control"
        />
      </div>
      {!currentUser.deleteRequest ? (
        <div className="form-group text-center mt-2">
          <button type="submit" className="btn btn-modal">
            Change
          </button>
        </div>
      ) : (
        <div className="form-group text-center mt-2">
          <button type="button" className="btn btn-modal" disabled>
            Change
          </button>
        </div>
      )}
    </form>
  );
};

ChangeNameForm.propTypes = {
  changeName: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default ChangeNameForm;

import React, { useState } from 'react';
import PropTypes from 'proptypes';

const Registration = props => {
  const { addUser, onRequestClose } = props;

  const [newUser, setNewUser] = useState({
    fname: '',
    lname: '',
    mail: '',
    pass: '',
    role: 'user',
    deleteRequest: false,
  });

  const handleAddUser = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const add = e => {
    e.preventDefault();
    addUser(newUser);
    onRequestClose();
  };

  return (
    <div className="tab-pane" id="register" role="tabpanel">
      <div className="modal-body">
        <form id="add-new-user">
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">First name:</label>
              <input
                type="text"
                className="form-control"
                id="input-name"
                name="fname"
                required
                onChange={handleAddUser}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fname">Last name:</label>
              <input
                type="text"
                className="form-control"
                id="input-fname"
                name="lname"
                required
                onChange={handleAddUser}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mail">E-mail:</label>
              <input
                type="email"
                className="form-control"
                id="input-email"
                name="mail"
                required
                onChange={handleAddUser}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pass">Password:</label>
              <input
                type="password"
                className="form-control"
                id="input-pass"
                name="pass"
                minLength="5"
                required
                onChange={handleAddUser}
              />
            </div>
            <div className="text-center mt-2">
              <input type="submit" value="Create account" onClick={add} className="btn btn-modal" />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

Registration.propTypes = {
  addUser: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default Registration;

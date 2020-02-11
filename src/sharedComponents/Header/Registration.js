import React, { useState } from 'react';
import PropTypes from 'proptypes';
import * as yup from 'yup';

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

  const [error, setError] = useState({ fname: '', lname: '', mail: '', pass: '' });

  const validEmailRegex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  const schema = yup.object().shape({
    fname: yup
      .string()
      .min(3)
      .required(),
    lname: yup
      .string()
      .min(3)
      .required(),
    mail: yup
      .string()
      .email()
      .required(),
    pass: yup
      .string()
      .min(6)
      .required(),
  });

  const handleAddUser = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'fname': {
        error.fname = value.length < 3 ? 'First name must be longer' : '';
        break;
      }
      case 'lname': {
        error.lname = value.length < 3 ? 'Last name must be longer' : '';
        break;
      }
      case 'mail': {
        error.mail = validEmailRegex.test(value) ? '' : 'Email is not valid';
        break;
      }
      case 'pass': {
        error.pass = value.length < 6 ? 'Password must be longer' : '';
        break;
      }
      default:
        break;
    }
    setError({ ...error });
    setNewUser({ ...newUser, [name]: value });
  };

  const add = e => {
    e.preventDefault();
    schema.isValid(newUser).then(valid => {
      if (valid) {
        addUser(newUser);
        onRequestClose();
      } else {
        alert('Invalid form!');
      }
    });
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
                value={newUser.name}
                required
                onChange={handleAddUser}
              />
              {error.fname.length > 0 ? (
                <span className="error text-center">{error.fname}</span>
              ) : null}
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
              {error.lname.length > 0 ? (
                <span className="error text-center">{error.lname}</span>
              ) : null}
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
              {error.mail.length > 0 ? (
                <span className="error text-center">{error.mail}</span>
              ) : null}
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
              {error.pass.length > 0 ? (
                <span className="error text-center">{error.pass}</span>
              ) : null}
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

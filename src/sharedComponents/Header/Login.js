import React, { useState } from 'react';
import PropTypes from 'proptypes';

const Login = props => {
  const { login, onRequestClose } = props;

  const [loginUser, setLoginUser] = useState({
    mail: '',
    pass: '',
  });

  const handleLogin = e => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const logUser = e => {
    e.preventDefault();
    login(loginUser);
    onRequestClose();
  };

  return (
    <div className="tab-pane active" id="login" role="tabpanel">
      <div className="modal-body">
        <form id="login-user">
          <div className="form-group">
            <label htmlFor="input-email">E-mail:</label>
            <input
              type="email"
              className="form-control"
              id="input-login-email"
              name="mail"
              onChange={handleLogin}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-pass">Password:</label>
            <input
              type="password"
              className="form-control"
              id="input-login-pass"
              name="pass"
              onChange={handleLogin}
            />
          </div>
          <div className="text-center mt-2">
            <input onClick={logUser} type="submit" value="Login" className="btn btn-modal" />
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default Login;

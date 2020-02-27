import React, { useState, useEffect } from 'react';
import PropTypes from 'proptypes';

const Login = props => {
  const { signin, onRequestClose, loginErrorFlag, currentUser } = props;

  const [loginUser, setLoginUser] = useState({
    mail: '',
    pass: '',
  });

  const [error, setError] = useState(false);

  const handleLogin = e => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (loginErrorFlag === 'error') {
      setError(true);
    } else {
      setError(false);
    }
    if (currentUser.isAuth) {
      onRequestClose();
    }
  }, [currentUser.isAuth, error, loginErrorFlag, onRequestClose]);

  const logUser = e => {
    e.preventDefault();
    signin(loginUser);
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
            {error ? <span className="error">Incorrect username or password.</span> : null}
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  signin: PropTypes.func.isRequired,
  loginErrorFlag: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default Login;

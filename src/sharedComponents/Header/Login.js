import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-pass">Password:</label>
            <input
              type="password"
              className="form-control"
              id="input-login-pass"
              onChange={e => {
                setPass(e.target.value);
              }}
            />
          </div>
          <div className="text-center mt-2">
            <input type="submit" value="Login" className="btn btn-modal" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

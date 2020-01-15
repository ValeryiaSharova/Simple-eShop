import React from 'react';

const Login = () => (
  <div className="tab-pane active" id="login" role="tabpanel">
    <div className="modal-body">
      <form id="login-user">
        <div className="form-group">
          <label htmlFor="input-email">E-mail:</label>
          <input type="email" className="form-control" id="input-login-email" />
        </div>
        <div className="form-group">
          <label htmlFor="input-pass">Password:</label>
          <input type="password" className="form-control" id="input-login-pass" />
        </div>
        <div className="text-center mt-2">
          <input type="submit" value="Login" className="btn btn-modal" />
        </div>
      </form>
    </div>
  </div>
);

export default Login;

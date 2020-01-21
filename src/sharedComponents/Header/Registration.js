import React from 'react';

const Registration = () => (
  <div className="tab-pane" id="register" role="tabpanel">
    <div className="modal-body">
      <form id="add-new-user">
        <fieldset>
          <div className="form-group">
            <label htmlFor="input-fname">First name:</label>
            <input
              type="text"
              className="form-control"
              id="input-fname"
              name="input-fname"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-lname">Last name:</label>
            <input
              type="text"
              className="form-control"
              id="input-lname"
              name="input-lname"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-email">E-mail:</label>
            <input
              type="email"
              className="form-control"
              id="input-email"
              name="input-email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-pass">Password:</label>
            <input
              type="password"
              className="form-control"
              id="input-pass"
              name="input-pass"
              minLength="5"
              required
            />
          </div>
          <div className="text-center mt-2">
            <input type="submit" value="Create account" className="btn btn-modal" />
          </div>
        </fieldset>
      </form>
    </div>
  </div>
);

export default Registration;

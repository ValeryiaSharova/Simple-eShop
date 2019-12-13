import React, { Component } from "react";
import Login from "./Login";
import Registration from "./Registration";

class LoginOrRegistration extends Component {
  render() {
    return (
      <li className="nav-item mr-2">
        <button
          type="button"
          className="btn btn-nav mt-1"
          data-toggle="modal"
          data-target="#log-or-reg-modal"
        >
          Login or Register
        </button>
        <div
          className="modal fade"
          id="log-or-reg-modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="log-or-reg-modal"
          aria-hidden="true"
        >
          <div className="modal-dialog cascading-modal" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h3
                  className="modal-title w-100 font-weight-bold"
                  id="log-or-reg-modal-title"
                >
                  Login or Register
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-c-tabs">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item mt-2 ml-2">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#login"
                      role="tab"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#register"
                      role="tab"
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <Login></Login>
                  <Registration></Registration>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default LoginOrRegistration;

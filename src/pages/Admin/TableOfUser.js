import React, { Component } from "react";
import Footer from "../../components/Footer";
import { tableOfUsers } from "../../store/DataUser";
import { string } from "prop-types";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: tableOfUsers
    };
  }

  render() {
    return (
      <div className="container mt-3">
        <h2>Page for admin</h2>
        <hr />
        <table
          className="table table-hover table-borderless text-center"
          id="table-of-users"
        >
          <thead className="thead-light">
            <tr className="table-color">
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Remove request</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.fname}</td>
                <td>{user.mail}</td>
                <td>{user.role}</td>
                <td>{user.deleteRequest.toString()}</td>
                <td>
                  <button
                    className="btn btn-color"
                    type="button"
                    name="user-remove-button"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <Footer></Footer>
      </div>
    );
  }
}

export default Table;

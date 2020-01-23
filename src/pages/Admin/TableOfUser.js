import React from 'react';
import PropTypes from 'proptypes';
import Footer from '../../sharedComponents/Footer';

const Table = props => {
  const { users } = props;
  return (
    <div className="container mt-3">
      <h2>Page for admin</h2>
      <hr />
      <table className="table table-hover table-borderless text-center" id="table-of-users">
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
          {users.map((user, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.fname}</td>
              <td>{user.mail}</td>
              <td>{user.role}</td>
              <td>{user.deleteRequest.toString()}</td>
              <td>
                <button className="btn btn-color" type="button" name="user-remove-button">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <Footer />
    </div>
  );
};

Table.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Table;

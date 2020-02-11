import React from 'react';
import PropTypes from 'proptypes';
import Footer from '../../sharedComponents/Footer/Footer';

const Table = props => {
  const { users, deleteUser } = props;

  const handleDelete = mail => () => {
    deleteUser(mail);
  };

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
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.mail}</td>
              <td>{user.role}</td>
              {user.deleteRequest ? (
                <td>
                  <button
                    onClick={handleDelete(user.mail)}
                    className="btn btn-color"
                    type="button"
                    name="user-remove-button"
                  >
                    Remove
                  </button>
                </td>
              ) : null}
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
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default Table;

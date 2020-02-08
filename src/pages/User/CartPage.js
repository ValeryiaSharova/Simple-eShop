import React from 'react';
import PropTypes from 'proptypes';
import Footer from '../../sharedComponents/Footer/Footer';

const CartPage = ({ cart, removeFromCart }) => {
  const handleDelete = good => () => {
    removeFromCart(good);
  };

  return (
    <div className="container mt-3">
      <h2>Your cart</h2>
      <hr />
      <table className="table table-hover table-borderless text-center" id="table-of-users">
        <thead className="thead-light">
          <tr className="table-color">
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Amount</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.length
            ? cart.map((good, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <img className="img-in-table" src={good.picture} alt={good.title} width="40%" />
                </td>
                <td>{good.title}</td>
                <td>{good.price}$</td>
                <td>{good.count}</td>
                <td>
                  <button
                    onClick={handleDelete(good)}
                    className="btn btn-color"
                    type="button"
                    name="user-remove-button"
                  >
                      Remove
                  </button>
                </td>
              </tr>
            ))
            : null}
        </tbody>
      </table>
      <hr />
      <Footer />
    </div>
  );
};

CartPage.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartPage;

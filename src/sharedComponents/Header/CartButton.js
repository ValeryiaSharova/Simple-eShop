import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';

const CartButton = ({ cart }) => {
  let bill = 0;
  if (cart.length) {
    cart.forEach(good => (bill += good.price * good.count));
  }
  return (
    <Link to="/cart">
      <button type="submit" className="btn btn-nav mt-1">
        Cart: {bill}$
      </button>
    </Link>
  );
};

CartButton.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartButton;

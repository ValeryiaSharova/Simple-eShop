import React from 'react';
import Footer from '../../sharedComponents/Footer/Footer';

const CartPage = ({ cart }) => (
  <div className="container mt-3">
    <h2>Your cart</h2>
    <hr />
    <table className="table table-hover table-borderless text-center" id="table-of-users">
      <thead className="thead-light">
        <tr className="table-color">
          <th>#</th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cart.length
          ? cart.map((good, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{good.title}</td>
              <td>{good.price}</td>
            </tr>
          ))
          : null}
      </tbody>
    </table>
    <hr />
    <Footer />
  </div>
);

export default CartPage;

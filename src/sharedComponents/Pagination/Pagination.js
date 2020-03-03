import React from 'react';
import PropTypes from 'proptypes';

const Pagination = ({ goodsPerPage, totalGoods, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-padding">
      <ul className="pagination justify-content-center">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} type="button" className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  goodsPerPage: PropTypes.number.isRequired,
  totalGoods: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;

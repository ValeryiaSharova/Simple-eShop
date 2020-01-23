import React from 'react';
import PropTypes from 'proptypes';
import Info from '../../sharedComponents/Header/Information';
import Footer from '../../sharedComponents/Footer';
import Card from '../../sharedComponents/GoodCard';
import ModalAddGood from './components/ModalAddGood';

const IndexForAdmin = props => {
  const { goods, deleteGood, addGood } = props;

  return (
    <div className="container mt-3">
      <Info />
      <div className="card-columns">
        {goods.reverse().map((good, index) => (
          <Card {...good} key={index} deleteGood={deleteGood} isAdmin />
        ))}
        <ModalAddGood addGood={addGood} />
      </div>
      <hr />
      <Footer />
    </div>
  );
};

IndexForAdmin.propTypes = {
  goods: PropTypes.array.isRequired,
  deleteGood: PropTypes.func.isRequired,
  addGood: PropTypes.func.isRequired,
};

export default IndexForAdmin;

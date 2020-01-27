import React from 'react';
import PropTypes from 'proptypes';
import { ModalConsumer } from '../../context/ModalContext';
import Info from '../../sharedComponents/Header/Information';
import Footer from '../../sharedComponents/Footer';
import Card from '../../sharedComponents/GoodCard';
import AddGood from './components/DialogAddGood';

const IndexForAdmin = props => {
  const { goods, deleteGood, addGood } = props;

  return (
    <div className="container mt-3">
      <Info />
      <div className="card-columns">
        {goods.reverse().map((good, index) => (
          <Card {...good} key={index} deleteGood={deleteGood} isAdmin />
        ))}
        <ModalConsumer>
          {({ showModal }) => (
            <div className="card box-shadow" id="add-good">
              <div className="card-body text-center">
                <h5 className="card-title">Add a new game</h5>
                <button
                  type="button"
                  className="btn btn-color btn-rounded"
                  data-toggle="modal"
                  data-target="#add-good-modal"
                  onClick={() => showModal(AddGood, { show: true, addGood })}
                >
                  Add
                  <i className="fas fa-plus rounded-circle ml-1 style-circle" />
                </button>
              </div>
            </div>
          )}
        </ModalConsumer>
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

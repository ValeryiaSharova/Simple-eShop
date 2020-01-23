import React, { useState } from 'react';
import PropTypes from 'proptypes';
import AddGood from './DialogAddGood';

const ModalAddGood = props => {
  const { addGood } = props;
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className="card box-shadow" id="add-good">
      <div className="card-body text-center">
        <h5 className="card-title">Add a new game</h5>
        <button
          type="button"
          className="btn btn-color btn-rounded"
          data-toggle="modal"
          data-target="#add-good-modal"
          onClick={openModal}
        >
          Add
          <i className="fas fa-plus rounded-circle ml-1 style-circle" />
        </button>
        <AddGood closeModal={closeModal} show={show} addGood={addGood} />
      </div>
    </div>
  );
};

ModalAddGood.propTypes = {
  addGood: PropTypes.func.isRequired,
};

export default ModalAddGood;

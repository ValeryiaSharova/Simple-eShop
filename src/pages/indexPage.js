import React, { useEffect } from 'react';
import PropTypes from 'proptypes';
import { ModalConsumer } from '../context/ModalContext';
import Info from '../sharedComponents/Information/Information';
import Footer from '../sharedComponents/Footer/Footer';
import Card from '../sharedComponents/GoodCard/GoodCard';
import AddGood from './Admin/components/DialogAddGood';

const Page = props => {
  const {
    goods,
    deleteGood,
    addGood,
    currentUser,
    editGood,
    loadGoods,
    loadUsers,
    addToCart,
  } = props;
  const { role } = currentUser;

  useEffect(() => {
    if (!goods.length) {
      loadGoods();
      loadUsers();
    }
  }, [goods.length, loadGoods, loadUsers]);

  return (
    <div className="container mt-3">
      <Info />
      <div className="card-columns">
        {goods.map((good, index) => (
          <Card
            {...good}
            key={index}
            deleteGood={deleteGood}
            editGood={editGood}
            role={role}
            addToCart={addToCart}
          />
        ))}
        <div>
          {role === 'admin' ? (
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
                      onClick={() => showModal(AddGood, { addGood })}
                    >
                      Add
                      <i className="fas fa-plus rounded-circle ml-1 style-circle" />
                    </button>
                  </div>
                </div>
              )}
            </ModalConsumer>
          ) : (
            <div />
          )}
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

Page.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteGood: PropTypes.func.isRequired,
  addGood: PropTypes.func.isRequired,
  editGood: PropTypes.func.isRequired,
  loadGoods: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default Page;

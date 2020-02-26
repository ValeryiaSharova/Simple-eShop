import React, { useEffect } from 'react';
import PropTypes from 'proptypes';
import Alert from 'react-bootstrap/Alert';
import { ModalConsumer } from '../../context/ModalContext';
import Info from '../../sharedComponents/Information/Information';
import Footer from '../../sharedComponents/Footer/Footer';
import Card from '../../sharedComponents/GoodCard/GoodCard';
import AddGood from '../Admin/components/DialogAddGood';
import Spinner from '../../sharedComponents/Spinner/Spinner';
import Search from './components/Search';

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
    loadingGoods,
    errorGoods,
    loadingUsers,
    errorUsers,
    loadedGoods,
    search,
    setRating,
    deleteRating,
  } = props;
  const { role } = currentUser;

  useEffect(() => {
    if (!loadedGoods) {
      loadGoods();
      loadUsers();
    }
  }, [goods.length, loadGoods, loadUsers, loadedGoods]);

  if (loadingGoods || loadingUsers) {
    return (
      <div className="container mt-3 text-center">
        <Spinner />
      </div>
    );
  }

  if (errorGoods) {
    return (
      <div className="container mt-3">
        <Info />
        <Alert variant="danger" className="text-center">
          Goods did not load :( <br />
          <b className="error-axios">Something went wrong: {errorGoods.message}</b>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mt-3">
      <Info />
      {errorUsers ? (
        <Alert variant="danger" className="text-center">
          Users did not load. <br />
          <b className="error-axios">Error: {errorUsers.message}</b>
        </Alert>
      ) : null}
      <Search search={search} />
      <hr />
      <div className="card-columns">
        {goods.map(good => (
          <Card
            {...good}
            key={good.id}
            deleteGood={deleteGood}
            editGood={editGood}
            role={role}
            addToCart={addToCart}
            setRating={setRating}
            currentUser={currentUser}
            deleteRating={deleteRating}
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
  loadingGoods: PropTypes.bool.isRequired,
  errorGoods: PropTypes.object,
  loadingUsers: PropTypes.bool.isRequired,
  errorUsers: PropTypes.object,
  loadedGoods: PropTypes.bool.isRequired,
  deleteGood: PropTypes.func.isRequired,
  addGood: PropTypes.func.isRequired,
  editGood: PropTypes.func.isRequired,
  loadGoods: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
  setRating: PropTypes.func.isRequired,
  deleteRating: PropTypes.func.isRequired,
};

Page.defaultProps = {
  errorGoods: {},
  errorUsers: {},
};

export default Page;

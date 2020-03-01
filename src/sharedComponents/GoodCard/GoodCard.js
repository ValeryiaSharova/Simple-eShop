import React, { memo } from 'react';
import PropTypes from 'proptypes';
import { ModalConsumer } from '../../context/ModalContext';
import EditGood from '../../pages/Admin/components/DialogEditGood';
import AllEvaluations from '../Dialogs/GoodCard/AllEvaluations';
import SimpleRating from './SimpleRating';

const Card = props => {
  const {
    deleteGood,
    role,
    editGood,
    addToCart,
    setRating,
    currentUser,
    deleteRating,
    users,
  } = props;
  const { id, title, description, price, picture, tags, rating } = props;

  const good = {
    id,
    title,
    description,
    price,
    picture,
    tags,
  };

  const add = () => {
    addToCart(good);
  };

  const isAdmin = role === 'admin';
  const isUser = role === 'user';

  const handleDelete = () => {
    deleteGood(id);
  };

  const chunkAdminButton = (
    <div className="text-center">
      <ModalConsumer>
        {({ showModal }) => (
          <button
            type="button"
            className="btn btn-color btn-rounded my-1 mx-1"
            onClick={() => showModal(EditGood, { editGood, good })}
          >
            Edit
            <i className="fas fa-angle-right rounded-circle ml-1 style-circle" />
          </button>
        )}
      </ModalConsumer>
      <button type="button" onClick={handleDelete} className="btn btn-color btn-rounded my-1 mx-1">
        Delete
        <i className="fas fa-times rounded-circle ml-1 style-circle" />
      </button>
    </div>
  );

  const chunkBuyButton = (
    <div className="text-center">
      <button type="button" onClick={add} className="btn btn-color btn-rounded my-1 mx-1">
        Buy for {price}$
        <i className="fas fa-angle-right rounded-circle ml-1 style-circle" />
      </button>
      <SimpleRating
        setRating={setRating}
        id={id}
        currentUser={currentUser}
        deleteRating={deleteRating}
        ratingArray={rating}
      />
    </div>
  );

  return (
    <div className="card box-shadow">
      <img className="card-img-top" src={picture} alt={title} />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-justify">{description}</p>
        <p className="card-text">
          {tags.map(tag => (
            <small key={tag} className="text-muted">{`#${tag} `}</small>
          ))}
        </p>
        {currentUser.isAuth ? (
          <div className="text-center">
            <ModalConsumer>
              {({ showModal }) => (
                <button
                  type="button"
                  className="btn btn-color btn-rounded my-1 mx-1"
                  onClick={() => showModal(AllEvaluations, { rating, users })}
                >
                  View all evaluations
                  <i className="fas fa-angle-right rounded-circle ml-1 style-circle" />
                </button>
              )}
            </ModalConsumer>
          </div>
        ) : null}
        {isUser && chunkBuyButton}
        {isAdmin && chunkAdminButton}
      </div>
    </div>
  );
};

Card.propTypes = {
  deleteGood: PropTypes.func,
  editGood: PropTypes.func,
  addToCart: PropTypes.func,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  role: PropTypes.string,
  setRating: PropTypes.func.isRequired,
  deleteRating: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  rating: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Card.defaultProps = {
  description: '',
  deleteGood: () => {},
  editGood: () => {},
  addToCart: () => {},
  role: 'anon',
};

export default memo(Card);

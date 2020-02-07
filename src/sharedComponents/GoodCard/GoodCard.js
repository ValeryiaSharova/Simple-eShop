import React, { memo } from 'react';
import PropTypes from 'proptypes';
import { ModalConsumer } from '../../context/ModalContext';
import EditGood from '../../pages/Admin/components/DialogEditGood';

const Card = props => {
  const { deleteGood, role, editGood } = props;
  const { id, title, description, price, picture, tags } = props;

  const good = {
    id,
    title,
    description,
    price,
    picture,
    tags,
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
      <button onClick={handleDelete} className="btn btn-color btn-rounded my-1 mx-1">
        Delete
        <i className="fas fa-times rounded-circle ml-1 style-circle" />
      </button>
    </div>
  );

  const chunkBuyButton = (
    <div className="text-center">
      <button className="btn btn-color btn-rounded my-1 mx-1">
        Buy for {price}$
        <i className="fas fa-angle-right rounded-circle ml-1 style-circle" />
      </button>
    </div>
  );

  return (
    <div className="card box-shadow">
      <img className="card-img-top" src={picture} alt={title} />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-justify">{description}</p>
        <p className="card-text">
          <small className="text-muted">{tags}</small>
        </p>
        {isUser && chunkBuyButton}
        {isAdmin && chunkAdminButton}
      </div>
    </div>
  );
};

Card.propTypes = {
  deleteGood: PropTypes.func,
  editGood: PropTypes.func,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  role: PropTypes.string,
};

Card.defaultProps = {
  description: '',
  deleteGood: () => {},
  editGood: () => {},
  role: 'anon',
};

export default memo(Card);

import React, { memo } from 'react';
import PropTypes from 'proptypes';

const Card = props => {
  const { deleteGood, isAdmin, isUser } = props;

  const handleDelete = () => {
    deleteGood(props.title);
  };

  const chunkAdminButton = (
    <div className="text-center">
      <button className="btn btn-color btn-rounded my-1 mx-1">
        Buy for {props.price}$
        <i className="fas fa-angle-right rounded-circle ml-1 style-circle" />
      </button>
      <button onClick={handleDelete} className="btn btn-color btn-rounded my-1 mx-1">
        Delete
        <i className="fas fa-times rounded-circle ml-1 style-circle" />
      </button>
    </div>
  );

  const chunkBuyButton = (
    <div className="text-center">
      <button className="btn btn-color btn-rounded my-1 mx-1">
        Buy for {props.price}$
        <i className="fas fa-angle-right rounded-circle ml-1 style-circle" />
      </button>
    </div>
  );

  return (
    <div className="card box-shadow">
      <img className="card-img-top" src={props.picture} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title text-center">{props.title}</h5>
        <p className="card-text text-justify">{props.description}</p>
        <p className="card-text">
          <small className="text-muted">{props.tags}</small>
        </p>
        {isUser && chunkBuyButton}
        {isAdmin && chunkAdminButton}
      </div>
    </div>
  );
};

Card.propTypes = {
  deleteGood: PropTypes.func,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool,
  isUser: PropTypes.bool,
};

Card.defaultProps = {
  description: '',
  deleteGood: () => {},
  isAdmin: false,
  isUser: false,
};

export default memo(Card);

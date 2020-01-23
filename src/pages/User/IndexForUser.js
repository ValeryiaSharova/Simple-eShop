import React from 'react';
import PropTypes from 'proptypes';
import Info from '../../sharedComponents/Header/Information';
import Footer from '../../sharedComponents/Footer';
import Card from '../../sharedComponents/GoodCard';

const IndexForUser = props => {
  const { goods } = props;

  return (
    <div className="container mt-3">
      <Info />
      <div className="card-columns">
        {goods.reverse().map((good, index) => (
          <Card {...good} key={index} isUser />
        ))}
      </div>
      <hr />
      <Footer />
    </div>
  );
};

IndexForUser.propTypes = {
  goods: PropTypes.array.isRequired,
};

export default IndexForUser;

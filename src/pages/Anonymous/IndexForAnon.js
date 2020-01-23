import React from 'react';
import PropTypes from 'proptypes';
import Info from '../../sharedComponents/Header/Information';
import Footer from '../../sharedComponents/Footer';
import Card from '../../sharedComponents/GoodCard';

const IndexForAnon = props => {
  const { goods } = props;

  return (
    <div className="container mt-3">
      <Info />
      <div className="card-columns">
        {goods.reverse().map((good, index) => (
          <Card {...good} key={index} />
        ))}
      </div>
      <hr />
      <Footer />
    </div>
  );
};

IndexForAnon.propTypes = {
  goods: PropTypes.array.isRequired,
};

export default IndexForAnon;

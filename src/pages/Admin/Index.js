import React, { useState } from 'react';
import Info from '../../sharedComponents/Header/Information';
import Footer from '../../sharedComponents/Footer';
import Card from '../../sharedComponents/GoodCard';
import { goodsData } from '../../store/DataGood';

const Index = () => {
  const [goods, setGoods] = useState(goodsData.reverse());

  return (
    <div className="container mt-3">
      <Info />
      <div className="card-columns">
        {goods.map((good, index) => (
          <Card {...good} key={index} isAdmin />
        ))}
        <div className="card box-shadow" id="add-good">
          <div className="card-body text-center">
            <h5 className="card-title">Add a new game</h5>
            <button
              type="button"
              className="btn btn-color btn-rounded"
              data-toggle="modal"
              data-target="#add-good-modal"
            >
              Add
              <i className="fas fa-plus rounded-circle ml-1 style-circle" />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Index;

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
          <Card {...good} key={index} />
        ))}
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Index;

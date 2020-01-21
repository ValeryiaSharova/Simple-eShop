import React, { useState } from 'react';
import Info from '../../components/Information';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import { goodsData } from '../../store/DataGood';

const Index = () => {
  const [goods, setGoods] = useState(goodsData.reverse());

  return (
    <div className="container mt-3">
      <Info />
      <div className="card-columns">
        {goods.map((good, index) => (
          <Card {...good} key={index} isUser />
        ))}
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Index;

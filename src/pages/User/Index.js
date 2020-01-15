import React, { Component } from 'react';
import Info from '../../components/Information';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import { goodsData } from '../../store/DataGood';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: goodsData.reverse(),
    };
  }

  render() {
    return (
      <div className="container mt-3">
        <Info />
        <div className="card-columns">
          {this.state.good.map((good, index) => (
            <Card {...good} key={index} isUser />
          ))}
        </div>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Index;

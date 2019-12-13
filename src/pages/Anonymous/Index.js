import React, { Component } from "react";
import Info from "../../components/Information";
import Footer from "../../components/Footer";
import Card from "./Card";
import { goodsData } from "../../store/DataGood";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: goodsData.reverse()
    };
  }

  render() {
    return (
      <div className="container mt-3">
        <Info></Info>
        <div className="card-columns">
          {this.state.good.map((good, index) => (
            <Card
              title={good.title}
              description={good.description}
              picture={good.picture}
              tags={good.tags}
              key={index}
            ></Card>
          ))}
        </div>
        <hr></hr>
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;

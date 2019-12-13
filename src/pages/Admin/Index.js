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
              price={good.price}
              key={index}
              isAdmin={true}
            ></Card>
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
                <i className="fas fa-plus rounded-circle ml-1 style-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <hr></hr>
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;

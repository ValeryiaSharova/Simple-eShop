import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card box-shadow">
        <img
          className="card-img-top"
          src={this.props.picture}
          alt={this.props.title}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{this.props.title}</h5>
          <p className="card-text text-justify">{this.props.description}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.tags}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;

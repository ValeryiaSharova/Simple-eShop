import React, { Component } from "react";

class Card extends Component {
  render() {
    const { isAdmin = false } = this.props;

    const chunkAdminButton = (
      <button className="btn btn-color btn-rounded my-1 mx-1" href="#">
        Delete
        <i className="fas fa-times rounded-circle ml-1 style-circle"></i>
      </button>
    );

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
          <div className="text-center">
            <a className="btn btn-color btn-rounded my-1 mx-1" href="#">
              Buy for {this.props.price}$
              <i className="fas fa-angle-right rounded-circle ml-1 style-circle"></i>
            </a>
            {isAdmin && chunkAdminButton}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

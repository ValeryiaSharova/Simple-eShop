import React, { Component } from "react";
import ModalAbout from "./Header/ModalAbout";
import ModalContact from "./Header/ModalContact";
import ModalLoginOrRegistration from "./Header/ModalLoginOrRegistration";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg nav-style">
        <div className="container">
          <a className="navbar-brand" href="#">
            bgShop
          </a>
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav">
              <ModalAbout></ModalAbout>
              <ModalContact></ModalContact>
            </ul>
            <ul className="navbar-nav navbar-right ml-auto">
              <ModalLoginOrRegistration></ModalLoginOrRegistration>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

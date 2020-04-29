import React, { Component } from "react";
import "../Header/Header.scss";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container__nav">
          <div className="container__nav__left">
            <h1>ADIT.</h1>
          </div>
          <div className="container__nav__right">
            <div className="container__navigasi">
              <a>About Me</a>
              <a>Portofolio</a>
              <a id="contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

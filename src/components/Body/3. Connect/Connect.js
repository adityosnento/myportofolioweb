import React, { Component } from "react";
import "../3. Connect/Connect.scss";

export default class Connect extends Component {
  render() {
    return (
      <div className="connect__container">
        <div className="connect__container__hero">
          <div className="connect__title">
            <h1>Stay Connect With Me!</h1>
          </div>
          <div className="connect__content__container">
            <div className="connect__content__hero">
              <div className="connect__content">
                <img
                  src={require("../../../assets/instagram.svg")}
                  alt="portofolio"
                />
                <p>Sharing daily inspiration, tips and my work process.</p>
              </div>
            </div>
            <div className="connect__content__hero">
              <div className="connect__content">
                <img
                  src={require("../../../assets/linked-in.svg")}
                  alt="portofolio"
                />
                <p>Connect to know about my last project or proffesional experience</p>
              </div>
            </div>
            <div className="connect__content__hero">
              <div className="connect__content">
                <img
                  src={require("../../../assets/github-square-brands.svg")}
                  alt="portofolio"
                />
                <p>Sharing daily inspiration, tips and my work process.</p>
              </div>
            </div>
            <div className="connect__content__hero">
              <div className="connect__content">
                <img
                  src={require("../../../assets/medium.svg")}
                  alt="portofolio"
                />
                <p>Sharing daily inspiration, tips and my work process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../5. Skills/Skills.scss";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills__container">
        <div className="skills__container__hero">
          <div className="skills__container__title">
            <div className="skills__contact">
            <img
                  src={require("../../../assets/desktop3.jpg")}
                  alt="portofolio"
                />
            </div>
          </div>
          <div className="skills__img">
            <div className="skills__logo1">
              
              <div className="skills__title">
                <h2>SKILLS</h2>
              </div>

              <div className="detail__skills">
                <div className="detail__design">
                  <h4>DESIGN</h4>
                  <p>UI/UX Design</p>
                  <p>Website Design</p>
                  <p>Mobile Design</p>
                </div>

                <div className="detail__development">
                  <h4>DEVELOPMENT</h4>
                  <p>HTML/CSS/JS</p>
                  <p>Frontend Developer</p>
                  
                </div>
              </div>
            </div>
            <div className="skills__logo2">
              <div>
                <h3>TOOLS</h3>
              </div>
              <div className="detail__skills">
                <img
                  src={require("../../../assets/Logo/react.png")}
                  alt="portofolio"
                />
                <img
                  src={require("../../../assets/Logo/xd.png")}
                  alt="portofolio"
                />
                <img
                  src={require("../../../assets/Logo/slack.png")}
                  alt="portofolio"
                />
                <img
                  src={require("../../../assets/Logo/gitlab.png")}
                  alt="portofolio"
                />
                <img
                  src={require("../../../assets/Logo/github.svg")}
                  alt="portofolio"
                />
                <img
                  src={require("../../../assets/Logo/figma.png")}
                  alt="portofolio"
                />
                <img
                  src={require("../../../assets/Logo/redux.png")}
                  alt="portofolio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

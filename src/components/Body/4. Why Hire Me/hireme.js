import React, { Component } from "react";
import './hireme.scss'

export default class hireme extends Component {
  render() {
    return (
      <div className="hireme__container">
        <div className="hireme__container__hero">
          <div className="hireme__title">
            <h1> Why Hire Me ?</h1>
          </div>
          <div className="hireme__content__hero">
            <div className="hireme__content"> 
              <img
                src={require("../../../assets/1.jpg")}
                alt="portofolio"
              />
              <div className="hireme__description">
                  <h5>Communicative</h5>
                  <p>I communicate what I struggle to make all crystal clear. I can communicate my ideas well, proven by my videos.</p>
              </div>
            </div>
            <div className="hireme__content"> 
              <img
                src={require("../../../assets/2.jpg")}
                alt="portofolio"
              />
              <div className="hireme__description">
                  <h5>Collaborative</h5>
                  <p>I can work within a team, collaborate well with developers because I’m frontend-end myself, and I love feedbacks.</p>
              </div>
            </div>
            <div className="hireme__content"> 
              <img
                src={require("../../../assets/3.jpg")}
                alt="portofolio"
              />
              <div className="hireme__description">
                  <h5>Management Freak</h5>
                  <p>In Duosweb.com, I manage the whole process from acquiring clients, project timeline, until product delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

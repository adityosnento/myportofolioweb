import React, { Component } from "react";
import ReactPlayer from "react-player";
import './LastestProject.scss'

class LastestProject extends Component {
  render() {
    return (
      <div>
        <div className="container__project">
          <div className="container__project__hero">
          <div className="project__title">
            <h1>MY LASTEST PROJECT</h1>
          </div>
          <div className="wrapper">
            <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=QGMi1DgFd_A" width='100%' height='100%'/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LastestProject;

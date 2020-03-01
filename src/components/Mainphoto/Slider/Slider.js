import React, { Component } from "react";
import {connect} from 'react-redux';
import Slider from "react-slick";
import '../Slider/Slider.scss'


class SimpleSlider extends Component {
  
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className="container-photo">
        <Slider {...settings}>
          <div>
                <img
                src={require('../../../assets/Avengers-Heroes.jpg')} 
                alt="logo"
                className="slide-photo"/>
          </div>
          <div>
                <img
                src={require('../../../assets/lion-king.jpg')} 
                alt="logo"
                className="slide-photo"/>
          </div>
          <div>
                <img
                src={require('../../../assets/how-totrain.jpg')} 
                alt="logo"
                className="slide-photo"/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default connect()(SimpleSlider);
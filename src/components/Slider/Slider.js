import React, { Component } from "react";
import {connect} from 'react-redux';
import Slider from "react-slick";
import '../Slider/Slider.scss'


class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container-photo">
        <Slider {...settings}>
          <div>
                <img
                src={require('../../assets/Avengers-Heroes.jpg')} 
                alt="logo"
                className="slide-photo"/>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default connect()(SimpleSlider);
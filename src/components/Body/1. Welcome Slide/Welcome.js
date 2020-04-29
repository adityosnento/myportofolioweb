import React, { Component } from 'react'
import '../1. Welcome Slide/Welcome.scss'
import Typing from 'react-typing-animation';
import TextLoop from "react-text-loop";

export default class Welcome extends Component {
    render() {
        return (
            <div className="container__welcome">
            <div className="container__welcome__hero">
                <div className="container__text">
                <p>I Design<span> </span>
                    <TextLoop>
                    <span> UI/UX </span>
                    <span> Websites </span>
                    <span> Apps </span>
                    </TextLoop> <span> </span>
                </p>
                <h1>I'M FRONTEND WEB DEVELOPER</h1>
                <p>My name is Adityo S. Nento, and I am a Frontend Developer based in Indonesia. I have a B.A. in Petroleum. So, What i do ? I combine research, user flows, wireframing, prototyping, & development to transform tricky problems into engaging solutions. With a background in Frontend Development. I understand the constraints of the web and I'm able to design and build around them effectively. </p>
                <button>About Me</button>
                </div>
                <div className="container__photo">
                    <div className="container__homeimage">
                    <img src={require("../../../assets/1.jpg")} alt="portofolio"/>
                    </div>
                </div>
            </div>
           
            </div>
        )
    }
}

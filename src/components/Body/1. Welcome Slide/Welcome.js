import React, { Component } from 'react'
import '../1. Welcome Slide/Welcome.scss'
import Typing from 'react-typing-animation';
import TextLoop from "react-text-loop";

export default class Welcome extends Component {
    render() {
        return (
            <div className="container__welcome">
                <div className="container__text">
                <h1>Hello <span role="img" aria-label="Cool hand emoji">👋</span>,</h1>
                <h1>I'm <span>Adityo</span></h1>
                <p>A<span> </span>
                    <TextLoop>
                    <span> Commited </span>
                    <span> Self-Taught </span>
                    <span> Passionate </span>
                    </TextLoop> <span> </span>
                Front-End Developer 
                </p>
                <button>About Me</button>
                </div>
            </div>
        )
    }
}

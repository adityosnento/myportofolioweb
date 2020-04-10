import React, { Component } from 'react'
import Welcome from './Body/1. Welcome Slide/Welcome'
import Aboutme from './Body/2. About Me/Aboutme'
import Portofolio from './Body/3. Portofolio/Portofolio'

export default class routes extends Component {
    render() {
        return (
            <div>
                <Welcome/>
                <Aboutme/>
                <Portofolio/>
            </div>
        )
    }
}

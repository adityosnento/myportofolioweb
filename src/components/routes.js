import React, { Component } from 'react'
import Welcome from './Body/1. Welcome Slide/Welcome'
import Portofolio from './Body/2. Portofolio/Portofolio'
import Connect from './Body/3. Connect/Connect'
import Hireme from './Body/4. Why Hire Me/hireme'
import Skills from './Body/5. Skills/Skills'
import Footer from './Body/6. Footer/Footer'
import LatestProject from './Body/LastestProject'

export default class routes extends Component {
    render() {
        return (
            <div>
                <Welcome/>
                <LatestProject/>
                <Connect/>
                <Portofolio/>
                <Hireme/>
                <Skills/>
                <Footer/>
            </div>
        )
    }
}

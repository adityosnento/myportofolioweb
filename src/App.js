import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Mainpage from './components/MainPage/Mainpage';
import Slider from './components/Slider/Slider'
import CardMovie from './components/Card-Movie/Cardmovie'

const App = () => {
  
  return (
       <Router>
         <Route path="/">
            <div className="display">
            <Header/>
            <Slider/>
            <div>
            <Mainpage/>
            <CardMovie/>
            <CardMovie/>
            <CardMovie/>
            </div>
            <Footer/>
            </div>
         </Route>
       </Router>
  
  );
}



export default connect () (App);

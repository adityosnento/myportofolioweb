import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Mainpage from './components/MainPage/Mainpage';
import Slider from './components/Slider/Slider'
import CardMovie from './components/Card-Movie/Cardmovie'
import Filter from './components/Category filter/filter';
import Review from './components/Review/Review'
import Moviedesc from './components/Moviedesc/Moviedesc'


const App = () => {
  
  return (
       <Router>
         <Route path="/">
            <div className="display">
            <Header/>
            <Moviedesc/>
            <Review/>
            {/* <Slider/>
              <div>
                <Mainpage/>
                <Filter/>
                <CardMovie/>
            </div>  */}
            <Footer/>
            </div>
         </Route>
       </Router>
  
  );
}



export default connect () (App);

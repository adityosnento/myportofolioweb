import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'


import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

//MainPage
import Mainpage from './components/MainPage/Mainpage';
import Slider from './components/Mainphoto/Slider/Slider'
import CardMovie from './components/Genre_Movie/Cardmovie'

//DescPage
import Filter from './components/Category filter/filter';
import FilterDetail from './components/Categorydetail/filterdetail';
import Mainphoto from './components/Mainphoto/Mainphoto/Mainphoto'



// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas,fab);


const App = () => {
  
  return (
       <Router>
         <Route path="/" exact>
            <div className="display" >
              <Header/>
              <Slider/>
              <div>
                <Mainpage/>
                <Filter/>
                <CardMovie/>
            </div> 
              <Footer/>
            </div>
         </Route>
         
         <Route path="/main">
          <div className="display">
            <Header/>
             <Mainphoto/>
                  <FilterDetail/>
            <Footer/>
            </div>
         </Route>
       </Router>
  
  );
}



export default connect () (App);

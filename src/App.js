import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import Mainpage from './components/MainPage/Mainpage';
// import Slider from './components/Mainphoto/Slider/Slider'
// import CardMovie from './components/Card-Movie/Cardmovie'
// import Filter from './components/Category filter/filter';
import Review from './components/Review/Review'
import Moviedesc from './components/Moviedesc/Moviedesc'
import Overview from './components/Overview/Overview'
import FilterDetail from './components/Categorydetail/filterdetail';
import Mainphoto from './components/Mainphoto/Mainphoto/Mainphoto'
// import Register from './components/Auth/register/register'
// import Login from './components/Auth/login/login'
// import Uploadphoto from './components/Auth/UploadPhoto/Uploadphoto'
// import UpdateProfile from './components/Auth/updateProfile/Updateprofile'


// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas,fab);


const App = () => {
  
  return (
       <Router>
         <Route path="/">
            <div className="display">
            {/* <Register/> */}
            {/* <Login/> */}
            {/* <Uploadphoto/> */}
            {/* <UpdateProfile/> */}
            <Header/>
            <Mainphoto/>
            <div>
                <FilterDetail/>
                <Overview/>
                <Moviedesc/>
                <Review/> 
            </div>
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

import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Search from './components/Kelas/Search'
import Header from './components/Header/Header'

const App = () => {
  
  return (
       <Router>
         <Route path="/">
            <div className="display">
            <Header/>
          
            </div>
         </Route>
       </Router>
  
  );
}



export default connect () (App);

import React, { Component } from 'react';
import '../updateProfile/Updateprofile.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";


class Registration extends Component {
  constructor(props) {
    super(props);

  }


  render(){
   
    return (
        <div className="wrapper">
          <div className="form-wrapper">
          <h1>Update Profile</h1>

          <div className="name">
            <label>Name</label> 
            <input type="text" placeholder="Update Name" id="name" required onChange={this.handleChange} name="name" />
          </div>
          
          <div className="updateProfile">
            <button type="submit" onClick={this.registration}>Update Profile</button>
          </div>
        </div>
      </div>
      
    );
  }
  
}

export default Registration;

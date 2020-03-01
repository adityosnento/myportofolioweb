import React, { Component } from 'react';
import '../UploadPhoto/Uploadphoto.scss'
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
            <h1>Update Photo</h1>
            <label for="myfile">Select a file:</label>
            <input type="file" id="myfile" name="myfile"/>
          <div className="createAccount">
            <button type="submit" onClick={this.registration}> Upload Photo
            <FontAwesomeIcon
                  className="iconawesome"
                  icon='upload'
            />
            </button>
          </div>
        </div>
      </div>
      
      );
    }
  
}


export default Registration;

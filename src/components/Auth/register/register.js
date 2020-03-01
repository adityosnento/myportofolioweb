import React, { Component } from 'react';
import '../register/register.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";


const emailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      email: null,
      password: null,
      Redirect: false,
      formErrors: {
        firstName:"",
        email:"",
        password:""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit = e => {
      e.preventDefault();

      if(formValid(this.state.formErrors)) {
        console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Email: ${this.state.email}
        Password: ${this.state.password}
        `)
      } else {
        console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
         
      }
    }

    handleChange = e => {
      e.preventDefault();
      const {name, value} = e.target;
      let formErrors = {...this.state.formErrors};
      this.setState ({
        [e.target.id] : e.target.value
      })


      switch (name) {
        case 'firstName' :
          formErrors.firstName = value.length < 3 ? 'minimum 3 characters required': "";
        break;
        
        case 'email' :
          formErrors.email = emailRegex.test(value) ? '': 'invalid email addres';
        break;
        
        case 'password' :
          formErrors.password = value.length < 6 ? 'minimum 6 characters required': "";
        break;
        default:
        break;
      }


      this.setState({
        formErrors
      })
    }


    registration = async(e) => {
      e.preventDefault()
      try {
          let res = await fetch("https://ga-todolist.herokuapp.com/api/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body:JSON.stringify({ 
            "name": this.state.firstName,
            "email": this.state.email,
            "password": this.state.password,
            "password_confirmation": this.state.password
          })
        }) 
        await res.json();
      }catch(err) {
        console.log(err)
      }
    }


  render(){
    
    const {formErrors} = this.state;
   
    return (
        <div className="wrapper">
          <div className="form-wrapper">
          <h1>Sign Up</h1>
          <form onClick={this.handleSubmit}>
            <div className="firstName">
                <label>First Name</label>
                  <FontAwesomeIcon
                  className="iconawesome"
                  icon='user' 
                  />
                  <input className="valid" type="text" placeholder="First Name" id="firstName" required onChange={this.handleChange}  name="firstName" />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
          
          <div className="email">
            <label>Email</label>
                <FontAwesomeIcon
                  className="iconawesome"
                  icon='envelope' 
                /> 
            <input type="text" placeholder="Email" id="email" required onChange={this.handleChange} name="email" />
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          
          <div className="password">
            <label>Password</label>
                <FontAwesomeIcon
                  className="iconawesome"
                  icon='lock' 
                />
            <input type="password" placeholder="Password" id="password" required onChange={this.handleChange} name="password" />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          
          <div className="createAccount">
            <button type="submit" onClick={this.registration}>Create Account</button>
            <small>Already Have an Account? Go to <Link to="/login" className="button-signup">Sign in!</Link></small>
          </div>
        </form>
        </div>
      </div>
      
    );
  }
  
}

export default Registration;

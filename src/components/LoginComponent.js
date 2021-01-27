import React, { Component } from "react";
import { PersonaService } from "../services/PersonaService";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';


class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persona: {
        username: "",
        password: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.personaService = new PersonaService();
  }
  navigate() {
    this.props.history.push({ pathname: "/home" });
  }
  navigateRegister() {
    this.props.history.push({ pathname: "/signin" });
  }
  
  navigateMovies() {
    this.props.history.push({ pathname: "/moviesCatalogue" });
  }
  navigateAboutUs() {
    this.props.history.push({ pathname: "/aboutus" });
  }
  navigateHome() {
    this.props.history.push({ pathname: "/home" });
  }
  handleChange(e) {
    this.setState({
      persona: {
        ...this.state.persona,
        [e.target.name]: e.target.value,
      },
    });
  }
  login() {
    const {username,password} = this.state.persona;
    if(username === "" || password === ""){
      alert('All fields are required')
    }else{
      this.personaService
      .Login(username, password)
      .then((data) => {
        if(data){
          this.props.setAuthToken(data);
          this.props.history.push({ pathname: "/home" });
          alert('Valid credentials')
        }else{
          alert('Invalid credentials')
        }        
      })
      .catch((error) => {
        console.log(error);
        alert('Invalid credentials')
      });
    }    
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center h-100" >
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Id"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                <button type="button"
                    onClick={this.navigateHome.bind(this)}
                    className="btn float-left login_btn"
                  >Home</button>
                  <button
                    type="button"
                    onClick={this.login.bind(this)}
                    className="btn float-right login_btn"
                  >Login
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?
                <p className="links-access" onClick={this.navigateRegister.bind(this)}>  Sign Up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  return {
    auth_token: state.auth_token
  }
}

const mapDispatchToProps = (dispath) => {
  return {
    setAuthToken: (value) => {
      console.log({value});
      dispath({ type: actionTypes.SET_AUTH_TOKEN, auth_token: value })
    }
  }  
}

export default connect( mapStateToprops,  mapDispatchToProps )(withRouter(LoginComponent));

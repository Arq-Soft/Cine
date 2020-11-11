import React, { Component } from "react";
import { PersonaService } from "../services/PersonaService";


class LoginComponent extends Component {
  constructor(props) {
  super(props);
  this.state = {
    persona: {
      username: '',
      password: '',
    },
  };
  this.personaService = new PersonaService(); 
  this.login = this.login.bind(this);
  this.onChange = this.onChange.bind(this);  
}

  login(){
    console.log("Login funcion");
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center h-100">
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
                    onChange={this.onChange}
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
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    onClick={this.handleSubmit}
                    className="btn float-right login_btn"
                  ></input>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?
                <a href="https://github.com/Arq-Soft/Cine">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginComponent;

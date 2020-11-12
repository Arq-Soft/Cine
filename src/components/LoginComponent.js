import React, { Component } from "react";
import { PersonaService } from "../services/PersonaService";


class LoginComponent extends Component {
  constructor(props) {
  super(props);
  this.state = {
    persona: {
      username: "",
      password: "",
    },
  };
  this.handleChange =this.handleChange.bind(this);
  this.personaService = new PersonaService(); 
}
  handleChange(e){
    this.setState({
      persona: {
        ...this.state.persona,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.persona);
  };
  login(){
    this.personaService
      .Login(parseInt(this.state.persona.username), this.state.persona.password)
      .then((data) => {console.log(data);
        console.log("Funciona");
      })
      .catch((error) => {
        console.log(error);
      });
    };

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
                  <input
                    type="submit"
                    value="Login"
                    onClick={this.login.bind(this)}
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

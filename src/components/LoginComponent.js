import React, { Component } from "react";
import {PersonaService} from '../services/PersonaService';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isFetch: true,
      Personas: []
    };
    this.PersonaService = new PersonaService();
  }

  componentDidMount(){
    this.PersonaService.getAll.then(data =>{
      console.log(data);
    })
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
                    placeholder="Username"
                    onChange={(_event, Username) =>
                      this.setState({ username: Username })
                    }
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
                    placeholder="Password"
                    onChange={(_event, Password) =>
                      this.setState({ password: Password })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
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

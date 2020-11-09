import React, { Component } from "react";
import { PersonaService } from "../services/PersonaService";

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.personaService = new PersonaService();
  }

  componentDidMount() {
    this.personaService
      .getAll()
      .then((data) => this.setState({ personas: data }));
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="cardRegister">
            <div className="card-header">
              <h3>Register</h3>
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
                    placeholder="Email"
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
                  />
                </div>

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="LastName"
                  />
                </div>
                
                <div className="input-group">
                  <div className="input-group-prepend">
                  </div>
                  <label className="combobox">Choose a identification</label>
                  <select classname="input-group-text" id="cars">
                    <option value="volvo">Citizenship card</option>
                    <option value="saab">Identity card</option>
                    <option value="mercedes">Passport</option>
                  </select>
                </div>

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
{/*
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Date of birth"
                  />
                </div>
*/}

                <div className="form-group">
                  <input
                    type="submit"
                    value="Register"
                    className="btn float-right login_btn"
                  ></input>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Do you have an account?
                <a href="https://github.com/Arq-Soft/Cine">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterComponent;

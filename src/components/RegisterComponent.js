import React, { Component } from "react";
import { PersonaService } from "../services/PersonaService";
import { withRouter } from "react-router-dom";

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persona: {
        id: null,
        name: null,
        email: null,
        phone: null,
        password: null,
        lastname: null,
        id_type: null,
        adress: null,
        date_birth:null
      },
    };
    this.personaService = new PersonaService();
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.personaService
      .getAll()
      .then((data) => this.setState({ personas: data }));
    this.setState({});
  }

  save() {
    this.personaService
      .save(this.state.persona)
      .then((data) => {
        console.log(data);
        this.props.history.push({ pathname: "/login" });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  navigateLogin() {
    this.props.history.push({ pathname: "/login" });
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
                    value={this.state.persona.name}
                    id="name"
                    onChange={(e) => {
                      let val = e.target.value;
                      this.setState((prevState) => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.name = val;
                        return { persona };
                      });
                    }}
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
                    value={this.state.value}
                    id="lastname"
                    onChange={(e) => {
                      let val = e.target.value;
                      this.setState((prevState) => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.lastname = val;
                        return { persona };
                      });
                    }}
                    type="text"
                    className="form-control"
                    placeholder="LastName"
                  />
                </div>

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    value={this.state.persona.id}
                    id="id"
                    onChange={(e) => {
                      let val = e.target.value;
                      this.setState((prevState) => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.id = val;
                        return { persona };
                      });
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Id"
                  />
                </div>

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    value={this.state.persona.email}
                    id="email"
                    onChange={(e) => {
                      let val = e.target.value;
                      this.setState((prevState) => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.email = val;
                        return { persona };
                      });
                    }}
                    type="email"
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
                    value={this.state.persona.password}
                    id="password"
                    onChange={(e) => {
                      let val = e.target.value;
                      this.setState((prevState) => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.password = val;
                        return { persona };
                      });
                    }}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <div className="input-group">
                  <div className="input-group-prepend"></div>
                  <label className="combobox">Choose a identification</label>
                  <select
                    value={this.state.value}
                    id="id_type"
                    onChange={(e) => {
                      let val = e.target.value;
                      this.setState((prevState) => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.id_type = val;
                        return { persona };
                      });
                    }}
                    className="input-group-text"
                  >
                    <option value="Citizenship card">Citizenship card</option>
                    <option value="Identity card">Identity card</option>
                    <option value="Passport">Passport</option>
                  </select>
                </div>

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    value={this.state.value}
                    id="adress"
                    onChange={(e) => {
                      let val = e.target.value;
                      this.setState((prevState) => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.adress = val;
                        return { persona };
                      });
                    }}
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
                    value={this.state.persona.phone}
                    id="phone"
                    onChange={(e) => {
                      let val = e.target.value;
                      this.setState((prevState) => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.phone = val;
                        return { persona };
                      });
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                   <input
                    type="date"
                    onChange={(e) => {
                      let val = e.target.valueAsNumber;
                      this.setState((prevState) => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.date_birth = val;
                        return { persona };
                      });
                    }}
                    className="form-control"
                    placeholder="Date of birth"
                  /> 
                </div>

                <div className="form-group">
                  <button
                    type="button"
                    value="Register"
                    onClick={this.save}
                    className="btn float-right login_btn"
                  >Register</button>
                </div>
              </form>
            </div>

            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Do you have an account?
                <p className="links-access" onClick={this.navigateLogin.bind(this)}>  Login</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(RegisterComponent);

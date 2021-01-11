import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../App.css";
import {
  Button,
  ButtonGroup,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  NavLink,
} from "reactstrap";
import { connect } from "react-redux";

class MainComponents extends Component {
  constructor(props) {
    super(props);
  }

  navigateLogin() {
    this.props.history.push({ pathname: "/login" });
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

  render() {
    return (
      <div id="main">
        <div id="content">
          <Navbar color="fixed" light expand="md">
            <NavbarBrand>
              <div id="slogan">
                <div className="image png"></div>
                <div className="inside">
                  <h2>
                    Cinema <span>Paradiso</span>
                  </h2>
                </div>
              </div>
            </NavbarBrand>
            <Collapse navbar>
              <Nav className="mr-auto" navbar>
                <Button>
                  <NavItem>
                    {this.props.auth_token ? (
                      <NavLink onClick={this.navigateLogin.bind(this)}>
                        Log out
                      </NavLink>
                    ) : (
                      <NavLink onClick={this.navigateLogin.bind(this)}>
                        Log in
                      </NavLink>
                    )}
                  </NavItem>
                </Button>
                {!this.props.auth_token && (
                  <Button>
                    <NavItem>
                      <NavLink onClick={this.navigateRegister.bind(this)}>
                        Sign Up
                      </NavLink>
                    </NavItem>
                  </Button>
                )}
                <UncontrolledDropdown nav inNavbar></UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="content">
            <ButtonGroup>
              <Button
                className="flex-button"
                onClick={this.navigateHome.bind(this)}
              >
                Home
              </Button>
              <Button
                className="flex-button"
                onClick={this.navigateMovies.bind(this)}
              >
                Movies catalogue
              </Button>
              <Button
                className="flex-button"
                onClick={this.navigateAboutUs.bind(this)}
              >
                About us
              </Button>
            </ButtonGroup>
            <div className="about-content">
              <div className="inside-phase">
                <h2>
                  <span>About Us</span>
                </h2>
              </div>
              <div className="phase">
                <em>
                  "The smile of our clients is the best reward to work that we
                  constantly do to offer you the best service in each of our
                  rooms. Daily we strive to give what best of themselves to get
                  thousands of users to enjoy a very good experience in our
                  cinemas."
                </em>
              </div>
              <div className="phase-content">
                <div className="inside-phase">
                  <h5>
                    <span>HISTORY</span>
                  </h5>
                </div>
                <p>
                  In August 2020, in the city of Medellín, a group of
                  visionaries, they founded the company with the aim of offering
                  the public a better space for projection of films.
                  Subsequently and over the years, Cinemas Paradiso, wanting to
                  keep up with the technological demand of the moment, innovate
                  in the types of rooms, improve and increase the number of
                  cinemas in the country, and focus even more on customer
                  service.
                </p>
                <div className="inside-phase">
                  <h5>
                    <span>LOCATIONS, THEMED ROOMS AND SERVICES</span>
                  </h5>
                </div>
                <p>
                  At Cinemas Procinal we currently have projection rooms located
                  in Medellín in the shopping centers. The commitment to offer
                  more and better spaces for the entertainment of our clients,
                  motivates us to innovate through the implementation of new
                  experiences such as: 
                </p>
                <ul>
                  <li>Café del cinema, with a wide gastronomic offer available at points of sale</li>
                  <li> Vibrosoundseating, with sensations of vibration</li>
                  <li>State-of-the-art rooms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <p className="lf">
            Copyright &copy; 2020 Cinema Paradiso - All Rights Reserved
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  return {
    auth_token: state.auth_token,
  };
};

// ARREGLARLO PARA LOG OUT
const mapDispatchToProps = (state) => {
  return {
    auth_token: state.auth_token,
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(withRouter(MainComponents));

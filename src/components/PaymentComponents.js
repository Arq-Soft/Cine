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

class PaymentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  
  navigateLogin() {
    this.props.history.push({ pathname: "/login" });
  }
  navigateRegister() {
    this.props.history.push({ pathname: "/signin" });
  }
  navigateMovies() {
    this.props.history.push({ pathname: "/signin" });
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
          </div>
          <div className="payment">
            <div className="payment-method">
                <h3>Select your payment method </h3>
             
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
)(withRouter(PaymentComponent));

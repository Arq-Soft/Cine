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

class ReserveComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
        seat:[
            "A1",
            "A2",
            "A3",
            "A4",
            "A5",
            "A6",
            "B1",
            "B2",
            "B3",
            "B4",
            "B5",
            "B6",
            "C1",
            "C2",
            "C3",
            "C4",
            "C5",
            "C6",
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "E1",
            "E2",
            "E3",
            "E4",
            "E5",
            "E6"
        ],

        selectedseat:[

        ]
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

  onchairClick(chair){
    console.log(chair);
    let newChairs = this.state.selectedseat;
    if(this.state.selectedseat.includes(chair)){
      // sacarlo
      newChairs = newChairs.filter(c => c != chair);
    }else{
      newChairs.push(chair);     
    }
    this.setState({ ...this.state, selectedseat: newChairs })
    setTimeout(() => {
        console.log(this.state.selectedseat)
      }, 10);
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
        </div>
        
        <div className="border border-danger col-6">
            {this.state.seat.map((seat)=>{
                return (<button key={seat} onClick={this.onchairClick.bind(this, seat)} style={ this.state.selectedseat.includes(seat) ? { background: 'red' } : { background: 'transparent' } }>{seat}</button>);
            })}
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

export default (withRouter(ReserveComponents));

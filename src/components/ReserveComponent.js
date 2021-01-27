import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../App.css";
import { Button, ButtonGroup, Navbar, NavbarBrand } from "reactstrap";
import { connect } from "react-redux";

class ReserveComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seat: [
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "B1",
        "B2",
        "B3",
        "B4",
        "B5",
        "C1",
        "C2",
        "C3",
        "C4",
        "C5",
        "D1",
        "D2",
        "D3",
        "D4",
        "D5",
        "E1",
        "E2",
        "E3",
        "E4",
        "E5",
        "F1",
        "F2",
        "F3",
        "F4",
        "F5",
        "G1",
        "G2",
        "G3",
        "G4",
        "G5",
      ],

      selectedseat: [],
    };
  }

  navigateLogin() {
    this.props.history.push({ pathname: "/login" });
  }
  navigateRegister() {
    this.props.history.push({ pathname: "/signin" });
  }
  navigateMovies() {
    this.props.history.push({ pathname: "/moviesComponents" });
  }
  navigateAboutUs() {
    this.props.history.push({ pathname: "/aboutus" });
  }
  navigateHome() {
    this.props.history.push({ pathname: "/home" });
  }
  navigateReserve() {
    alert("Reserva creada");
    this.props.history.push({ pathname: "/home" });
  }

  onchairClick(chair) {
    console.log(chair);
    let newChairs = this.state.selectedseat;
    if (this.state.selectedseat.includes(chair)) {
      // sacarlo
      newChairs = newChairs.filter((c) => c != chair);
    } else {
      newChairs.push(chair);
    }
    this.setState({ ...this.state, selectedseat: newChairs });
    setTimeout(() => {
      console.log(this.state.selectedseat);
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

        <div class="row">
          <div class="col">
            <ul>
              {this.props.movie_to_reserve ? (
                <li className="movies_hour">
                  Hour:
                  {this.props.movie_to_reserve.hour}
                </li>
              ) : (
                <li className="btn float-left login_btn">{" Does not exist "}</li>
              )}
              {this.props.movie_to_reserve ? (
                <li className="movies_room">
                  Room:
                  {this.props.movie_to_reserve.room_code}
                </li>
              ) : (
                <li className="btn float-left login_btn">{"Does not exist"}</li>
              )}

              {this.props.movie_to_reserve ? (
                <button
                  className="btn float-left login_btn"
                  onClick={this.navigateReserve.bind(this)}
                >
                  Reserve
                </button>
              ) : (
                <li className="btn float-left login_btn">{"Cannot be reserved"}</li>
              )}
            </ul>
          </div>
          <div class="col">
            <div className="border border-danger col-6">
              {this.state.seat.map((seat) => {
                return (
                  <button
                    className="chairs"
                    key={seat}
                    onClick={this.onchairClick.bind(this, seat)}
                    style={
                      this.state.selectedseat.includes(seat)
                        ? { color: "#fff", background: "#1458a2a6" }
                        : { background: "transparent" }
                    }
                  >
                    {seat}
                  </button>
                );
              })}
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
    movie_to_reserve: state.movie_to_reserve,
  };
};

export default connect(mapStateToprops)(withRouter(ReserveComponents));

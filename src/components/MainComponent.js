import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../App.css";
import cars from "../images/carsCarrusel.jpg";
import prueba2 from "../images/prueba2.jpg";
import {
  Button,
  ButtonGroup,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  NavLink,
} from "reactstrap";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
const items = [
  {
    src: cars,
    altText: "First Movie",
  },
  {
    src: prueba2,
    altText: "Second Movie",
  },
];

class MainComponents extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
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
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="100%" />
          <CarouselCaption
            captionText={item.caption || ""}
            captionHeader={item.caption || ""}
          />
        </CarouselItem>
      );
    });
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
                <p>
                <NavItem>
                    {this.props.auth_token ? (
                      <NavLink onClick={this.navigateLogin.bind(this)}>
                        Bienvenido
                      </NavLink>
                    ) : (
                      <NavLink onClick={this.navigateLogin.bind(this)}>
                      </NavLink>
                    )}
                  </NavItem>
                  </p>
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
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={this.goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />
            </Carousel>

            <div className="inside-rooms">
              <h2> Our rooms </h2>
            </div>
            <div className="video-react-player">

            <ReactPlayer
              url="https://youtu.be/bbd10ZJWdSo"
              width="100%"
              height="100%"
              controls
              playing
              muted
              playbackRate={1.75}
              className="react-player"
            />
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
/*const mapDispatchToProps = (state) => {
  return {
    auth_token: state.auth_token,
  };
};*/


export default connect(
  mapStateToprops
)(withRouter(MainComponents));

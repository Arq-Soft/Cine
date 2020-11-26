import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../App.css";
import cars from "../images/carsCarrusel.jpg";
import prueba2 from "../images/prueba2.jpg";
import {Collapse,Navbar,NavbarBrand,Nav,NavItem,UncontrolledDropdown,Carousel,CarouselItem,CarouselControl,
  CarouselIndicators,CarouselCaption,NavLink,} from "reactstrap";
import { connect } from 'react-redux';
const items = [
  {
    src: cars,
    altText: "First Movie",
  },
  {
    src:prueba2,
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
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText}  width="100%"/>
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
                <NavItem>{this.props.auth_token
                  ? <NavLink onClick={this.navigateLogin.bind(this)}>SALIR</NavLink>
                  :
                  <NavLink onClick={this.navigateLogin.bind(this)}>Ingresar</NavLink>
                }
                </NavItem>
                {!this.props.auth_token &&(<NavItem>
                   <NavLink onClick={this.navigateRegister.bind(this)}>Registrarse</NavLink>
                </NavItem>)
                }
                <UncontrolledDropdown nav inNavbar></UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="content">
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
    auth_token: state.auth_token
  }
}

// ARREGLARLO PARA LOG OUT
const mapDispatchToProps = (state) => {
  return {
    auth_token:state.auth_token
    }
  }  

export default connect( mapStateToprops,  mapDispatchToProps )(withRouter(MainComponents));

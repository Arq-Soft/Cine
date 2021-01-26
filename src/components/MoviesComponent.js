import React, { Component, useEffect, useState } from "react";
import { Media } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  ButtonGroup,
  Navbar,
  NavbarBrand,
} from "reactstrap";

class MoviesCatalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Movies: [
       
      ],
    };
    this.catalogueMovies()
  }

  navigatePayment() {
    this.props.history.push({ pathname: "/reserve" });
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
  mostrar() {
    console.log(this.props.auth_token);
  }
  catalogueMovies() {
      fetch("http://localhost:9191/Movies")
    .then(res => res.json()).then(data => {
      console.log(data)
      this.setState({...this.state, Movies:data})
    })
    }

  
    /*
      this.MoviesService
      .getAll().then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });*/
    

  render() {
    const catalogue = this.state.Movies.map((movie) => {
      return (
        
        <div key={movie.id} className="col-12 mt-5">          
          <Media tag="li">
            <Media left middle>
              <Media
                className="movie-cover"
                object
                src={movie.image}
                alt={movie.image}
              />
            </Media>
            <Media body className="ml-5">
              <h1>{movie.name}</h1>
              <p className="movie-synopsis">{movie.synopsis}</p>
              <Media body className="ml-0">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3">
                      <h5>Duration: </h5>
                      <h6 className="movie-duration">
                        {movie.runnin_time + " Min"}
                      </h6>
                    </div>
                    <div className="col-lg-3">
                      <h5>Classification: </h5>
                      <h6 className="movie-classification">
                        {movie.classification}
                      </h6>
                    </div>
                    <div className="col-lg-3">
                      <h5>Directed by: </h5>
                      <h6 className="movie-director">{movie.directed_by}</h6>
                    </div>
                    <div className="col-lg-3">
                      <h5>Genre: </h5>
                      <h6 className="movie-genre">{movie.genre} </h6>
                    </div>
                  </div>
                  
                </div>
              </Media>
            </Media>
            {this.props.auth_token ? (
              <button
                type="button"
                onClick={this.navigatePayment.bind(this)}
                className="btn float-left login_btn"
              >
                Reserve{" "}
              </button>
            ) : (
              <button
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="To reserve it is necessary to be logged in"
                onClick={this.navigateLogin.bind(this)}
                className="btn float-left login_btn"
              >
                Log in{" "}
              </button>
            )}
          </Media>
        </div>
      );
    });

    return (
      <div className="container">
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
                onClick={this.navigateAboutUs.bind(this)}
              >
                About us
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="row">
          <Media list>{catalogue}</Media>
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


export default connect(
  mapStateToprops
)(withRouter(MoviesCatalogue));

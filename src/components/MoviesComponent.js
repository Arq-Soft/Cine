import React, { Component } from "react";
import { Media } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { MoviesService } from "../services/MoviesService";

class MoviesCatalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Movies: [],
    };
  }

  navigatePayment() {
    this.props.history.push({ pathname: "/ReserveComponents" });
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
  
  catalogueMovies() {
      this.MoviesService
      .getAll().then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    } 

  render() {
    const catalogue = this.state.Movies.map((movie) => {
      return (
        <div key={movie.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media
                className="movie-cover"
                object
                src={movie.Image}
                alt={movie.Image}
              />
            </Media>
            <Media body className="ml-5">
              <h1>{movie.Name}</h1>
              <p className="movie-synopsis">{movie.Synopsis}</p>
              <Media body className="ml-0">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3">
                      <h5>Duration: </h5>
                      <h6 className="movie-duration">
                        {movie.RunninTime + " Min"}
                      </h6>
                    </div>
                    <div className="col-lg-3">
                      <h5>Classification: </h5>
                      <h6 className="movie-classification">
                        {movie.Classification}
                      </h6>
                    </div>
                    <div className="col-lg-3">
                      <h5>Directed by: </h5>
                      <h6 className="movie-director">{movie.DirectedBy}</h6>
                    </div>
                    <div className="col-lg-3">
                      <h5>Genre: </h5>
                      <h6 className="movie-genre">{movie.Genre} </h6>
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

const mapDispatchToProps = (state) => {
  return {
    auth_token: state.auth_token,
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(withRouter(MoviesCatalogue));

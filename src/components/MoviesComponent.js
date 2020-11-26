import React, { Component } from "react";
import { Media } from "reactstrap";
import {MoviesService} from '../services/MoviesService';
import { withRouter } from 'react-router-dom';

class MoviesCatalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Movies: []
    };
    this.MoviesService = new MoviesService();
  }

  render() {
    const catalogue = this.props.movies.map((movie) => {
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
                      <h6 className="movie-duration">{movie.RunninTime + " Min"}</h6>
                    </div>
                    <div className="col-lg-3">
                      <h5>Classification: </h5>
                      <h6 className="movie-classification">{movie.Classification}</h6>
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

export default withRouter(MoviesCatalogue);

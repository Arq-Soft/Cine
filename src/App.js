import { Component } from "react";
import "./App.css";
import MoviesCatalogue from "./components/MoviesComponent";
import MainComponents from "./components/MainComponent";
import LoginComponent from "./components/LoginComponent";
import { MOVIES } from "./shared/Movies";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MOVIES,
    };
  }
  render() {
    return (
      <div>
        <LoginComponent Login={this.state.Login} />
        <MainComponents main={this.state.main} />
        <div className="container">
          <div id="main"><div id="header">
              <div className="row-1">
                <div className="fleft"><img src="https://www.flaticon.com/svg/static/icons/svg/633/633600.svg" alt="" width="100" height="70" ></img>CINEMA <span>PARADISO</span></div>
              </div></div> 
          </div>
        </div>
        <MoviesCatalogue movies={this.state.movies} />
      </div>
    );
  }
}
export default App;

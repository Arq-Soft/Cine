import { Component } from "react";
import "./App.css";
import MoviesCatalogue from "./components/MoviesComponent";
import RegisterComponent from "./components/RegisterComponent";
import MainComponents from "./components/MainComponent";
import LoginComponent from "./components/LoginComponent";
import { MOVIES } from "./shared/Movies";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MOVIES,
    };
  }
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" render={(props) => <MainComponents {...props} />} />
        <Route path="/login" render={(props) => <LoginComponent {...props} />} />
        <Route path="/signin" render={(props) => <RegisterComponent {...props} />} />
        <Route path="/moviesCatalogue" render={(props) => <MoviesCatalogue {...props} />} />
        <Route path="/test" render={ (props) => <div>testeando</div> } />
        {/* <Route path="/login" render={ (props) => <Login /> }/> */}
        {/* Redirect unhandled routes */}
        <Route>
          <Redirect to="/home" />
          {/* Redirecciona de una ruta no encontrada*/}
        </Route>
      </Switch>
      </BrowserRouter>
      /* <div>
      <LoginComponent Login={this.state.Login} />
        <MainComponents main={this.state.main} />
        <RegisterComponent register={this.state.Login} />
        <div className="container">
          <div id="main"><div id="header">
              <div className="row-1">
                <div className="fleft"><img src="https://www.flaticon.com/svg/static/icons/svg/633/633600.svg" alt="" width="100" height="70" ></img>CINEMA <span>PARADISO</span></div>
              </div></div> 
          </div>
        </div>
        <MoviesCatalogue movies={this.state.movies} />
      </div>*/
    );
  }
}
export default App;

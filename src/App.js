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
    );
  }
}
export default App;

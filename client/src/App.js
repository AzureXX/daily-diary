import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

//Importing custom made components
import NavBar from "./components/layout/NavBar";
import Landing from "./components/landing/Landing";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Landing} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

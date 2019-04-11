import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Nav />
        <Jumbotron />
        <Switch>
            <Route exact path="/" component={Search}></Route>
            <Route exact path="/saved" component={Saved}></Route>
        </Switch>
      </Router>
     </div>
    );
  }
}

export default App;

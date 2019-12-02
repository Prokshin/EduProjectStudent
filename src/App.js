import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./component/navigation/navigation";
import Content from "./component/content/content";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = { name: "Ivan Petrov" };
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation name={this.state.name}></Navigation>
          <Switch>
            <Route path="/tasks">
              <Content type="tasks"></Content>
            </Route>
            <Route path="/teachers">
              <Content type="teachers"></Content>
            </Route>
            <Route path="/progress">
              <Content type="progress"></Content>
            </Route>
            <Route path="/other">
              <Content type="other"></Content>
            </Route>
            <Route path="/user">
              <Content type="user"></Content>
            </Route>
            <Route path="/">
              <Content type="home page"></Content>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./component/navigation/navigation";
import Content from "./component/content/content";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
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
              <Content type="my task page"></Content>
            </Route>
            <Route path="/teachers">
              <Content type="my teachers page"></Content>
            </Route>
            <Route path="/progress">
              <Content type="progress page"></Content>
            </Route>
            <Route path="/other">
              <Content type="other course page"></Content>
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

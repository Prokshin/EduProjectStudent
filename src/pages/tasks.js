import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Task from "../component/task/task";

export default class TasksPage extends Component {
  back() {
    window.history.back();
  }
  render() {
    let id = 0;
    return (
      <Router>
        <Switch>
          <Route path={`/tasks/${id}`}>
            <Task id={id}/>
          </Route>
          <Route path={`/tasks`}>
          <h2>Component</h2>
            <div>{this.props.types}</div>
            <Link to={`/tasks/${id}`}>Ссылка на тест</Link>
          </Route>
        </Switch>
      </Router>
    );
  }
}

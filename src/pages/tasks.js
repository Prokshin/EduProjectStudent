import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default class TasksPage extends Component {
  back() {
    window.history.back();
  }
  render() {
    let id = 0;
    return (
      <Router>
        <Switch>
          <Route path={`/tasks/test_${id}`}>
            <h2>Component</h2>
            <button onClick={this.back}>Закрыть тест</button>
            <div>
              тест, расположенный по адресу /tasks/test_id , где id - уникальный
              идентификатор теста
            </div>
          </Route>
          <Route path={`/tasks`}>
            <div>{this.props.types}</div>
            <Link to={`/tasks/test_${id}`}>Ссылка на тест</Link>
          </Route>
        </Switch>
      </Router>
    );
  }
}

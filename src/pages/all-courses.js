import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Task from "../component/task/task";
import CourseCard from "../component/course-card/course-card";
import { DataService } from "../services/user-data";

export default class TasksPage extends Component {
  data = new DataService();
  back() {
    window.history.back();
  }
  UpdateCourses() {
    const courses = this.data.getAllCourses().courses;
    let coursesEl = courses.map(n => {
      return (
        <Link to={`/user-courses/${n.id}`}>
          <CourseCard
            key={n.id}
            id={n.id}
            name={n.name}
            teacher={n.teacher}
            progress={n.progress}
          />
        </Link>
      );
    });
    console.log(coursesEl);
    return coursesEl;
  }
  render() {
    // const Courses = map(n => {});
    this.UpdateCourses();
    return (
      <Switch>
        <Route path="/courses/:id" children={<Task />}></Route>
        <Route path="/courses/">
          <h2 className="section-name">Все Курсы</h2>
          <hr></hr>
          {this.UpdateCourses()}
        </Route>
        <Route path="*">gg</Route>
      </Switch>
    );
  }
}

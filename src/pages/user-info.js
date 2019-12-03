import React, { Component } from "react";
import { user } from "../services/user-data";
import CoursesList from "../component/courses-list/courses-list";
export default class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      name: user.name,
      courses: user.courses
    };
  }

  render() {
    const coursesElement = this.state.courses.map(n => {
      return <CoursesList name={n.name} progress={n.progress} key={n.name} />;
    });
    return (
      <div>
        <h2>Ваше имя: {this.state.name} </h2>
        <h2>Ваши курсы: </h2>
        {coursesElement}
      </div>
    );
  }
}

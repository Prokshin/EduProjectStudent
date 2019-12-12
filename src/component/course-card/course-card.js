import React, { Component } from "react";
import "./course-card.css";

export default class CourseCard extends Component {
  render() {
    let id = 0;
    return (
      <div className="card">
        <div className="card-left">
          <h2>{this.props.name}</h2>
          <span>преподователь: {this.props.teacher}</span>
        </div>
        <div className="card-right">
          <h2>Пройдено {this.props.progress}%</h2>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { DataService } from "../services/user-data";

export default class TeacherPage extends Component {
  data = new DataService();
  state = {
    t: [{}]
  };
  constructor(props) {
    super(props);
    this.updateTeacher();
  }
  updateTeacher() {
    this.data.getAllMyTeachers().then(res => {
      this.setState({
        t: res.results
      });
    });
  }
  CreateList() {
    let i = 0;
    return this.state.t.map(n => {
      console.log(n);
      i++;
      return (
        <div className="card" key={i}>
          <h2>{n.name}</h2>
          <img src={n.img} />
        </div>
      );
    });
  }
  render() {
    let tee = this.CreateList();
    return (
      <div>
        <h2 className="section-name">Преподаватели</h2>
        <hr></hr>
        <div>{tee}</div>
      </div>
    );
  }
}

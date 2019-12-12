import React, { Component } from "react";
import "./examine.css";
import { DataService } from "../../services/user-data";

const a = new DataService();

export default class Examine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      answers: null,
      correct: []
    };
  }

  render() {
    return (
      <div>
        <h1>Тут будет тест {this.props.id}</h1>
      </div>
    );
  }
}

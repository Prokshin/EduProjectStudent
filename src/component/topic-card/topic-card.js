import React, { Component } from "react";
import "./topic-card.css";

export default class TopicCard extends Component {
  render() {
    let id = 0;
    return (
      <div className="t-card">
        <div className="card-left">
          <h2>{this.props.name}</h2>
          <hr className="bord"></hr>
        </div>
        <div className="card-right">
          <h2>Пройдено {this.props.progress}%</h2>
        </div>
      </div>
    );
  }
}

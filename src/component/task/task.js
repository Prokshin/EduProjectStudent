import React, { Component } from "react";
import "./task.css"
export default class Task extends Component {
  back() {
    window.history.back();
  }
  render() {
    return (
        <div>
            <button onClick={this.back}>Закрыть тест</button>
    <h2>Component task-{this.props.id}</h2>
            <div>
              тест, расположенный по адресу /tasks/id , где id - уникальный
              идентификатор теста, передаётся в параметрах и здесь он равен {this.props.id}
            </div>
        </div>
    );
  }
}

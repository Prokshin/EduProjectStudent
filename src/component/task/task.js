import React, { Component } from "react";
import "./task.css";
import { useParams } from "react-router-dom";
import { DataService } from "../../services/user-data";

const Task = () => {
  const back = () => {
    window.history.back();
  };
  let { id } = useParams();
  const data = new DataService();

  const courseInfo = data.getCourseInfo(id);

  return (
    <div>
      <h2 className="section-name">{courseInfo.name}</h2>
      <hr></hr>
      <div>
        тест, расположенный по адресу /tasks/id , где id - уникальный
        идентификатор теста, передаётся в параметрах и здесь он равен {id}
      </div>
    </div>
  );
};
export default Task;

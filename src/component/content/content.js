import React from "react";
import "./content.css";
import TasksPage from "../../pages/tasks";

const Content = props => {
  const id = 1;
  let element = "";
  switch (props.type) {
    case "my task page":
      element = <TasksPage types="Страница с тестами и заданиями" />;
      break;
    default:
      element = <div>{props.type}</div>;
      break;
  }
  return <div className="content">{element}</div>;
};

export default Content;

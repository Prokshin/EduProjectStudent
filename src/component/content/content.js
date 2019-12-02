import React from "react";
import "./content.css";
import TasksPage from "../../pages/tasks";
import UserInfo from '../../pages/user-info'

const Content = props => {
  const id = 1;
  let element = "";
  switch (props.type) {
    case "my task page":
      element = <TasksPage types="Страница с тестами и заданиями" />;
      break;
    case "user info page":
      element = <UserInfo types="Страница с тестами и заданиями" />;
      break;
    default:
  element = <div>{props.type}{props.children}</div>;
      break;
  }
  return <div className="content">{element}</div>;
};

export default Content;

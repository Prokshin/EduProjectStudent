import React from "react";
import "./content.css";
import TasksPage from "../../pages/tasks";
import UserInfo from '../../pages/user-info'
import TeacherPage from '../../pages/teachers'
import HomePage from "../../pages/home";
import CoursesPage from "../../pages/courses";

const Content = props => {
  let element = "";
  switch (props.type) {
    case "tasks":
      element = <TasksPage types="Страница с тестами и заданиями" />;
      break;
    case "user":
      element = <UserInfo types="Страница с тестами и заданиями" />;
      break;
    case "teachers":
      element = <TeacherPage types="Страница с тестами и заданиями" />;
      break;
      case "home":
        element = <HomePage types="Страница с тестами и заданиями" />;
        break;
      case "courses":
        element = <CoursesPage types="Страница с тестами и заданиями" />;
         break;
    default:
  element = <div>{props.type}{props.children}</div>;
      break;
  }
  return <div className="content">{element}</div>;
};

export default Content;

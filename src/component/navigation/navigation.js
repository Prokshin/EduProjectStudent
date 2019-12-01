import React from "react";
import UserPicture from "../user-picture/user-picture";
import NavogationItem from "../navigation-item/navigation-item";
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = props => {
  const nav = [
    { name: "мои задания", active: false, link: "/tasks" },
    { name: "мои преподаватели", active: false, link: "/teachers" },
    { name: "прогресс", active: true, link: "/progress" },
    { name: "другие курсы", active: false, link: "/other" }
  ];
  let navItem = "";
  for (let i = 0; i < nav.length; i++) {
    navItem = nav.map(n => (
      <Link key={n.link} to={n.link}>
        <NavogationItem name={n.name} active={n.active} />
      </Link>
    ));
  }
  return (
    <div className="navigation">
      <Link to="/">
        <div className="navigation_logo">LOGO</div>
      </Link>
      <Link to="/user">
        <UserPicture name={props.name} />
      </Link>
      {navItem}
    </div>
  );
};

export default Navigation;

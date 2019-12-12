import React from "react";
import UserPicture from "../user-picture/user-picture";
import NavogationItem from "../navigation-item/navigation-item";
import "./navigation.css";
import { Link } from "react-router-dom";
import { user } from "../../services/user-data";

const Navigation = props => {
  const nav = [
    { name: "личный кабинет", active: false, link: "/" },
    { name: "мои курсы", active: false, link: "/user-courses" },
    { name: "мои преподователи", active: false, link: "/progress" },
    { name: "другие курсы", active: false, link: "/courses" }
  ];
  let navItem = "";
  const reload = () => {};
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
      {navItem}
    </div>
  );
};

export default Navigation;

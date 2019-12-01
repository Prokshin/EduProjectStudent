import React from "react";

import "./navigation-item.css";

//Test work

const NavogationItem = props => {
  let elClass = "navigation_item";
  //if (props.active) elClass += " active";
  return <div className={elClass}>{props.name}</div>;
};

export default NavogationItem;

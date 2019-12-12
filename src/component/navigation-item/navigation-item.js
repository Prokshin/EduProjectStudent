import React, { Component } from "react";

import "./navigation-item.css";

//Test work

class NavogationItem extends Component {
  constructor() {
    super();
    this.state = { active: false };
  }
  click() {
    this.setState = { active: true };
  }
  render() {
    let elClass = "navigation_item";
    if (this.props.active) elClass += " active";

    return (
      <div onClick={this.click()} className={elClass}>
        {this.props.name}
      </div>
    );
  }
}

export default NavogationItem;

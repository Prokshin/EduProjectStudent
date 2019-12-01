import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./user-picture.css";

const UserPicture = props => {
  return (
    <div className="user">
      <div className="user_img"></div>
      <FontAwesomeIcon icon={faUser} />
      <div className="user_name">{props.name}</div>
    </div>
  );
};

export default UserPicture;

import React from "react";

const CoursesList = props => {
  return (
    <div>
      <hr></hr>
      <h3>{props.name}</h3>
      <p>{props.progress}%</p>
    </div>
  );
};

export default CoursesList;

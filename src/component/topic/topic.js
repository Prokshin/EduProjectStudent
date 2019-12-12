import React, { Component } from "react";
import "./topic.css";
import { useParams, useRouteMatch } from "react-router-dom";
import { DataService } from "../../services/user-data";
import Examine from "../examine/examine";

const Topic = props => {
  let { id } = useParams();
  let gg = useRouteMatch();
  const data = new DataService();
  console.log(data.getTestsById("0001").id);
  let el;
  const openTest = () => {
    if (document.getElementById("ee").style.display !== "block") {
      document.getElementById("ee").style.display = "block";
    } else {
      document.getElementById("ee").style.display = "none";
    }
  };
  return (
    <div>
      <h2 className="section-name">
        {data.getCourseDetail(props.idPar).topics[id].name}
      </h2>
      <hr></hr>
      <div>{data.getCourseDetail(props.idPar).topics[id].text}</div>
      <div>{data.getTestsById("0001").id}</div>
      <div className="ex" id="ee">
        <button onClick={openTest}>Закрыть</button>
        <Examine id={"0001"} />
      </div>
      <button className="btn" onClick={openTest}>
        Пройти тест
      </button>
    </div>
  );
};

export default Topic;

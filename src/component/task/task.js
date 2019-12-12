import React, { Component } from "react";
import "./task.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { DataService } from "../../services/user-data";
import TopicCard from "../topic-card/topic-card";
import Topic from "../topic/topic";

const Task = () => {
  const back = () => {
    window.history.back();
  };
  let { id } = useParams();
  const data = new DataService();

  const courseInfo = data.getCourseDetail(id);

  const topics = courseInfo.topics.map(n => {
    return (
      <Link key={n.id} to={`${id}/${n.id}`}>
        <TopicCard name={n.name} progress={n.progress}></TopicCard>
      </Link>
    );
  });
  console.log(id);
  return (
    <div>
      <Switch>
        <Route
          path={`/user-courses/${id}/:id`}
          children={<Topic idPar={id} />}
        />
        <Route path={`/user-courses/${id}/`}>
          <h2 className="section-name">{courseInfo.name}</h2>
          <hr></hr>
          {topics}
        </Route>
      </Switch>
    </div>
  );
};
export default Task;

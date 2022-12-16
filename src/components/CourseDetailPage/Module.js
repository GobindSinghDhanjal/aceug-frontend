import React from "react";
import LessonCourseItem from "./LessonCourseItem";
import QuizCourseItem from "./QuizCourseItem";
import VideoCourseItem from "./VideoCourseItem";

const Module = ({ module }) => {

  if(!module){
    return (<h1>Loading</h1>)
  }

  return (
    <li className="single-curriculum-section">
      <div className="section-header">
        <div className="section-left">
          <h5 className="title">{module.name}</h5>
          <p className="section-desc">{module.description}</p>
        </div>
      </div>
      <ul className="section-content">
      {console.log(module.resources)}
        {module.resources.map((resource,i) => {
          switch (resource.type) {
            case "video":
              return <VideoCourseItem key={i} video={resource} />;
            case "quiz":
              return <QuizCourseItem key={i} quiz={resource} />;
            case "lesson":
              return <LessonCourseItem key={i} lesson={resource} />;
            default:
              return;
          }
        })}
      </ul>
    </li>
  );
};

export default Module;

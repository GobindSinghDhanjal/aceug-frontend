import React from "react";
import LessonCourseItem from "./LessonCourseItem";
import QuizCourseItem from "./QuizCourseItem";
import VideoCourseItem from "./VideoCourseItem";

const Module = ({ module }) => {
  return (
    <li className="single-curriculum-section">
      <div className="section-header">
        <div className="section-left">
          <h5 className="title">{module.name}</h5>
          <p className="section-desc">{module.description}</p>
        </div>
      </div>
      <ul className="section-content">
        {module.resources.map((resource) => {
          switch (resource.type) {
            case "video":
              return <VideoCourseItem video={resource} />;
            case "quiz":
              return <QuizCourseItem quiz={resource} />;
            case "lesson":
              return <LessonCourseItem lesson={resource} />;
            default:
              return;
          }
        })}
      </ul>
    </li>
  );
};

export default Module;

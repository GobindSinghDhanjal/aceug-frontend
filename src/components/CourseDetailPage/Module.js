import React from "react";
import LessonCourseItem from "./LessonCourseItem";
import QuizCourseItem from "./QuizCourseItem";
import VideoCourseItem from "./VideoCourseItem";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Module = ({ module }) => {

  if(!module){
    return (<Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>)
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
   
        {module.resources.map((resource,i) => {
          switch (resource.resourceType) {
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

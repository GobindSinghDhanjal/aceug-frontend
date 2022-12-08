import React from "react";

const LessonCourseItem = ({ lesson }) => {
  return (
    <li className="course-item">
      <a className="section-item-link lesson" href="">
        <span className="item-name">{lesson.name}</span>
        <div className="course-item-meta">
          <span className="item-meta duration">{lesson.duration} min</span>
          <span className="item-meta item-meta-icon">
            <i className="fas fa-lock-alt"></i>
          </span>
        </div>
      </a>
    </li>
  );
};

export default LessonCourseItem;

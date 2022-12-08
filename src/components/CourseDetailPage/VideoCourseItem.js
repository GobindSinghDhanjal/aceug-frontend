import React from "react";

const VideoCourseItem = ({ video }) => {
  return (
    <li className="course-item">
      <a className="section-item-link lesson" href="">
        <span className="item-name">{video.name}</span>
        <div className="course-item-meta">
          <span className="item-meta item-meta-icon">
            <i className="far fa-video"></i>
          </span>
          <span className="item-meta duration">{video.duration} min</span>
          <span className="item-meta item-meta-icon">
            <i className="fas fa-lock-alt"></i>
          </span>
        </div>
      </a>
    </li>
  );
};

export default VideoCourseItem;

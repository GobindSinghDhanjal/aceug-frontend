import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../../redux/courses/courseActions";

const Video = () => {
  const video = useSelector((state) => state.progress.currentResource);

  return (
    <div className="course-details-wrapper">
      <div className="course-overview">
        <h3>{video.name}</h3>
        <p>
          Now more than ever, corporations are investing heavily in IT. The
          quality of these investments affects the daily work of millions.
        </p>

        <p>
          Yet it’s not uncommon to see industry surveys where the failure rates
          for IT projects is over 50%. It’s possible to do better and it’s
          possible to do so consistently. Use the Business Model Canvas to focus
          your company strategy and facilitate buy-in from stakeholders.
        </p>

        <div className="overview-course-video">
          <iframe
            title="Drive Digital Transformation With Platform Strategies | Info-Tech Analyst Perspective"
            src="https://www.youtube.com/embed/m-X1ExlQ9uE?feature=oembed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;

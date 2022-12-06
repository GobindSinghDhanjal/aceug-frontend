import React from "react";
import { useSelector } from "react-redux";

function Reading() {
  const lesson = useSelector((state) => state.progress.currentResource);

  return (
    <div className="course-details-wrapper">
      <div className="course-overview">
        <h3>{lesson.name}</h3>
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
}

export default Reading;

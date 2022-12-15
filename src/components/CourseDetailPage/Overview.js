import React from "react";
import { baseURL } from "../../shared/baseUrl";

const Overview = ({ overview }) => {

  if(!overview){
    return (<h1>Loading</h1>)
  }

  return (
    <>
      <div id="overview" className="tab-pane fade show active">
        <div className="course-overview">
          <div className="overview-course-video">
            <iframe
              title="Drive Digital Transformation With Platform Strategies | Info-Tech Analyst Perspective"
              src={overview.iframe}
            ></iframe>
            <div dangerouslySetInnerHTML={{ __html: overview.description }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;

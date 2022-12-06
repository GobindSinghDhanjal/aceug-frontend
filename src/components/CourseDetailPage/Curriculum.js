import React from "react";
import Module from "./Module";

const Curriculum = ({ modules }) => {
  return (
    <>
      <div id="curriculum" className="tab-pane fade">
        <div className="course-curriculum">
          <ul className="curriculum-sections">
            {modules.map((module) => (
              <Module module={module} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Curriculum;

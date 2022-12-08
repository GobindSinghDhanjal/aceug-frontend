import React from "react";
import Module from "./Module";

const Curriculum = ({ modules }) => {

  if(!modules){
    return(<h1>Loading</h1>)
  }
  return (
    <>
      <div id="curriculum" className="tab-pane fade">
        <div className="course-curriculum">
          <ul className="curriculum-sections">
            {modules.map((module,i) => (
              <Module key={i} module={module} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Curriculum;

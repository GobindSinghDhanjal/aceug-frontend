import React from "react";
import Instructor from "./Instructor";

const Instructors = ({ instructors }) => {

  if(!instructors){
    return(<h1>Loading</h1>)
  }

  return (
    <>
      <div id="instructor" className="tab-pane fade">
        {instructors.map((instructor,i) => (
          <Instructor key={i} instructor={instructor} />
        ))}
      </div>
    </>
  );
};

export default Instructors;

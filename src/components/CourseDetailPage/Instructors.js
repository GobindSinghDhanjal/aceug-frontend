import React from "react";
import Instructor from "./Instructor";

const Instructors = ({ instructors }) => {
  return (
    <>
      <div id="instructor" className="tab-pane fade">
        {instructors.map((instructor) => (
          <Instructor instructor={instructor} />
        ))}
      </div>
    </>
  );
};

export default Instructors;

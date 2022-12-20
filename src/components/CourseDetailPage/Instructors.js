import React from "react";
import Instructor from "./Instructor";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Instructors = ({ instructors }) => {

  if(!instructors){
    return(<Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>)
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

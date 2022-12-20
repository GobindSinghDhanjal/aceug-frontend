import React from "react";
import Module from "./Module";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Curriculum = ({ modules }) => {

  if(!modules){
    return(<Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>)
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

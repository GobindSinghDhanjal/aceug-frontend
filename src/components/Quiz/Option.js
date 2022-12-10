import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

export const Option = (props) => {
  const [correct, setCorrect] = useState(false);
  const valueNum = "value" + props.number;
  const placeholderText = "Value " + props.number;
  const correctNum = "correct" + props.number;

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="single-input mb-30">
          <br />
          <input
            type="text"
            required
            id={valueNum}
            name={valueNum}
            placeholder={placeholderText}
          />
        </div>
      </div>
      <div className="col-md-4">
        <div className="single-input mb-30">
          <br />
          <FormControl fullWidth>
            <InputLabel required id="demo-simple-select-label">
              Correct
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id={correctNum}
              name={correctNum}
              value={correct}
              label="Instructor Name"
              onChange={(e) => setCorrect(e.target.value)}
            >
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

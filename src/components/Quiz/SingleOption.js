import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const SingleOption = (props) => {
  const [correct, setCorrect] = useState(false);
  const [optionVal, setOptionValue] = useState("");

  function onAddOptionClick(e) {
    e.preventDefault();
    props.setOption((current) => [
      ...current,
      { value: optionVal, correct: correct },
    ]);
    setOptionValue("");
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="single-input mb-30">
            <br />
            <input type="text" value={optionVal} onChange={e=>setOptionValue(e.target.value)} placeholder="Value" />
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
      <div className="single-input mb-30">
        <button
          onClick={onAddOptionClick}
          className="btn btn-primary btn-hover-secondary btn-width-100"
        >
          Add Option
        </button>
      </div>
    </div>
  );
};

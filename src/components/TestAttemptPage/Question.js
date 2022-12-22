import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect } from "react";

export const Question = (props) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  useEffect(()=>{
    console.log(value);
  },[value]);

  return (
    <div className="col-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Ques. {props.quesTitle}</h5>
          <div className="card-text">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                {props.options.map((option, i) => {
                  return (
                    <FormControlLabel
                      key={i}
                      value={option.option}
                      control={<Radio />}
                      label={option.option}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

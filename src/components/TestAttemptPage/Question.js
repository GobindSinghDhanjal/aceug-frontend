import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const Question = ({
  answers,
  setAnswers,
  onNextQues,
  onPrevQues,
  currentQues,
}) => {
  const [value, setValue] = useState("");

  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    setIsFound(false);
    setValue("");

    answers.map((answer) => {
      if (answer.id === currentQues.id) {
        setValue(answer.option);
        setIsFound(true);
      }
    });
  }, [currentQues]);

  useEffect(() => {
    if (!isFound) {
      setValue("");
    }
  }, [isFound]);

  function handleChange(e) {
    setValue(e.target.value);
    const answer = {
      id: currentQues.id,
      ques: currentQues.ques,
      option: e.target.value,
    };

    if (answers.length === 0) {
      setAnswers((prevState) => [...prevState, answer]);
    } else {
      let flag = true;
      answers.map((ans) => {
        if (ans.id === answer.id) {
          ans.option = e.target.value;
          flag = false;
        }
      });

      if (flag) {
        setAnswers((prevState) => [...prevState, answer]);
      }

      console.log(answers);
    }
  }

  function handleChange2() {
    setValue("");

    console.log("before answers : ", answers);

    console.log("answers : ", answers);
    console.log(currentQues.id);

    let newAnswers = answers.filter((answer) => answer.id !== currentQues.id);
    setAnswers(newAnswers)

    console.log("after answers : ", answers);

    console.log(currentQues.id);
  }

  useEffect(() => {
    console.log("this is an : ", answers);
  }, [answers]);
  

  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Ques. {currentQues.ques}</h5>
          <div className="card-text">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                {currentQues.options.map((option, i) => {
                  return (
                    <FormControlLabel
                      key={"currentQues"+i}
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
      <br />
      <br />
      <Stack
        alignItems="center"
        justifyContent="center"
        direction="row"
        spacing={3}
      >
        <Button variant="contained" onClick={onPrevQues}>
          Previos
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleChange2();
          }}
        >
          Clear
        </Button>
        <Button variant="contained" onClick={onNextQues}>
          Next
        </Button>
      </Stack>
    </div>
  );
};

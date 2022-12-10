import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Option } from "./Option";

export const Quiz = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const form = useRef(null);
  const [statement, setStatemanet] = useState("");
  const [postiveMarks, setPositiveMarks] = useState("");
  const [questions, setQuestions] = useState([
    {
      statement: "This is a demo ques2 ?",
    },
  ]);
  const [negativeMarks, setNegativeMarks] = useState("");
  const [explantion, setExplanation] = useState("");
  const [option, setOption] = useState([]);
  const [numOfOption, setNumOfOption] = useState(1);

  function addOption(e) {
    e.preventDefault();
    setNumOfOption(numOfOption + 1);
  }

  function onFormSubmit(e) {
    e.preventDefault();

    const statement = e.target.statement.value;
    const positiveMarks = e.target.positiveMarks.value;
    const negativeMarks = e.target.negativeMarks.value;
    const explanation = e.target.explanation.value;

    for (let index = 1; index <= numOfOption; index++) {
      const value2 = eval("e.target.value" + index);
      const correct2 = eval("e.target.correct" + index);
      setOption((current) => [
        ...current,
        { value: value2.value, correct: correct2.value },
      ]);
    }

    setQuestions((current) => [
      ...current,
      {
        statement: statement,
        positiveMarks: positiveMarks,
        negativeMarks: negativeMarks,
        explanation: explanation,
        option: option,
      },
    ]);

    console.log(questions);
    
  }

  return (
    <div>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title">Quiz Input</h1>
          </div>
        </div>
      </div>

      <div className="login-register-section section section-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="login-form-wrapper p-4">
                    {questions.map((ques, i) => {
                      return (
                        <div key={i} className="login-form-wrapper p-3 mb-4">
                          Ques. {ques.statement}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="login-form-wrapper">
                    <form className="login-form">
                      <div className="row">
                        <div className="col-6">
                          <div className="single-input mb-30">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              required
                              id="name"
                              name="name"
                              placeholder="Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="single-input mb-30">
                            <label htmlFor="time">Time</label>
                            <input
                              type="text"
                              required
                              id="time"
                              name="time"
                              placeholder="Time"
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <br />

                  <div className="login-form-wrapper">
                    <form
                      ref={form}
                      className="login-form"
                      id="questionForm"
                      onSubmit={onFormSubmit}
                    >
                      <div className="single-input mb-30">
                        <label htmlFor="statement">Statement</label>
                        <input
                          type="text"
                          required
                          id="statement"
                          name="statement"
                          placeholder="Statement"
                          value={statement}
                          onChange={(e) => setStatemanet(e.target.value)}
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-4">
                          <div className="single-input mb-30">
                            <label htmlFor="positiveMarks">
                              Positive Marks
                            </label>
                            <input
                              type="text"
                              required
                              id="positiveMarks"
                              name="positiveMarks"
                              minLength={1}
                              maxLength={1}
                              placeholder="Positive Marks"
                              value={postiveMarks}
                              onChange={(e) => setPositiveMarks(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="single-input mb-30">
                            <label htmlFor="negativeMarks">
                              Negative Marks
                            </label>
                            <input
                              type="text"
                              required
                              id="negativeMarks"
                              name="negativeMarks"
                              placeholder="Negative Marks"
                              value={negativeMarks}
                              onChange={(e) => setNegativeMarks(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="login-form-wrapper p-3 mb-4">
                        Options
                        {[...Array(numOfOption)].map((e, i) => (
                          <Option key={i} number={i + 1} />
                        ))}
                        {/* <Option/> */}
                        <div className="single-input mb-30">
                          <button
                            onClick={addOption}
                            className="btn btn-primary btn-hover-secondary btn-width-100"
                          >
                            Add Option
                          </button>
                        </div>
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="explanation">Explanation</label>
                        <input
                          type="text"
                          required
                          id="explanation"
                          name="explanation"
                          placeholder="Explanation"
                          value={explantion}
                          onChange={(e) => setExplanation(e.target.value)}
                        />
                      </div>

                      <div className="single-input">
                        <button className="btn btn-primary btn-hover-secondary btn-width-100">
                          Add Question
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

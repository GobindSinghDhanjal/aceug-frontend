import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { baseURL } from "../../shared/baseUrl";
import { Option } from "./Option";

export const Quiz = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("");
  const [tags, setTags] = useState("");
  const [minimumGrade, setMinimumGrade] = useState();
  const form = useRef(null);
  const [statement, setStatement] = useState("");
  const [postiveMarks, setPositiveMarks] = useState();
  const [questions, setQuestions] = useState([]);
  const [negativeMarks, setNegativeMarks] = useState();
  const [explantion, setExplanation] = useState("");
  const [option, setOption] = useState([]);
  const [numOfOption, setNumOfOption] = useState(1);

  function addOption(e) {
    e.preventDefault();
    setNumOfOption(numOfOption + 1);

    // for (let index = 1; index <= numOfOption; index++) {
    //   const value1 = eval("e.target.value" + index);
    //   const correct = eval("e.target.correct" + index);
    //   setOption((current) => [
    //     ...current,
    //     { value: value1.value, correct: correct.value },
    //   ]);
    // }
  }

  useEffect(() => {
    console.log("added option");
    console.log(option);
    
    console.log("question");
    console.log(questions);

  }, [option]);

  function onFormSubmit(e) {
    e.preventDefault();

    const statement = e.target.statement.value;
    const positiveMarks = e.target.positiveMarks.value;
    const negativeMarks = e.target.negativeMarks.value;
    const explanation = e.target.explanation.value;
    


    for (let index = 1; index <= numOfOption; index++) {
      const value1 = eval("e.target.value" + index);
      const correct = eval("e.target.correct" + index);
      console.log(value1.value);
      console.log(correct.value);
      setOption((current) => [
        ...current,
        { value: value1.value, correct: correct.value },
      ]);
      if(index===numOfOption){
        console.log("this is ooption");
        console.log(option);
        console.log("this is enddddddd ooption");
      }
    }

 
      setQuestions((current) => [
        ...current,
        {
          statement: statement,
          positive_marks: Number(positiveMarks),
          negative_marks: Number(negativeMarks),
          explanation: explanation,
          options: option,
        },
      ]);


  

    // console.log(questions);
  }

  function addQues() {
    setQuestions((current) => [
      ...current,
      {
        statement: statement,
        positive_marks: Number(postiveMarks),
        negative_marks: Number(negativeMarks),
        explanation: explantion,
        options: option,
      },
    ]);
  }

  function addQuiz(e) {
    e.preventDefault();
    console.log("on Add quiz");

    const data = {
      name: name,
      subject: subject,
      time_limit: time,
      tags: tags,
      minimum_grade: minimumGrade,
      questions: questions,
    };

    axios
      .post(baseURL + "quiz/add-quiz", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        const errorMsg = error.message;
        alert(errorMsg);
      });
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
                    <h1 className="title">Questions</h1>
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
                              type="number"
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
                      <div className="row">
                        <div className="col-6">
                          <div className="single-input mb-30">
                            <label htmlFor="subject">Subject</label>
                            <input
                              type="text"
                              required
                              id="subject"
                              name="subject"
                              placeholder="Subject"
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="single-input mb-30">
                            <label htmlFor="tags">Tags</label>
                            <input
                              type="text"
                              required
                              id="tags"
                              name="tags"
                              placeholder="Tags"
                              value={tags}
                              onChange={(e) => setTags(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="single-input mb-30">
                            <label htmlFor="tags">Minimum Grade</label>
                            <input
                              type="number"
                              required
                              id="minimumGrade"
                              name="minimumGrade"
                              placeholder="Minimum Grade"
                              value={minimumGrade}
                              onChange={(e) => setMinimumGrade(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <br />
                  <br />
                  <h1 className="title">Add a question</h1>
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
                          onChange={(e) => setStatement(e.target.value)}
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-4">
                          <div className="single-input mb-30">
                            <label htmlFor="positiveMarks">
                              Positive Marks
                            </label>
                            <input
                              type="number"
                              required
                              id="positiveMarks"
                              name="positiveMarks"
                              min={0}
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
                              type="number"
                              required
                              id="negativeMarks"
                              name="negativeMarks"
                              min={0}
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
                  <br />
                  <br />
                  <br />
                  <div className="single-input">
                    <button
                      onClick={addQuiz}
                      className="btn btn-primary btn-hover-secondary btn-width-100"
                    >
                      Add Quiz
                    </button>
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

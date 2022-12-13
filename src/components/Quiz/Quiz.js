import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { baseURL } from "../../shared/baseUrl";
import DeleteIcon from "@mui/icons-material/Delete";
import { Question } from "./Question";
import { SingleOption } from "./SingleOption";

export const Quiz = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("");
  const [tags, setTags] = useState("");
  const [minimumGrade, setMinimumGrade] = useState(0);
  const form = useRef(null);
  const [statement, setStatement] = useState("");
  const [postiveMarks, setPositiveMarks] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [negativeMarks, setNegativeMarks] = useState(0);
  const [explantion, setExplanation] = useState("");
  const [option, setOption] = useState([]);
  const [numOfOption, setNumOfOption] = useState(1);

  function addOption(e) {
    e.preventDefault();
    setNumOfOption(numOfOption + 1);
  }

  function onDeleteOption(id) {
    setOption((prevOption) => {
      return prevOption.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function onEditClick(id) {
    const question = questions[id];

    setStatement(question.statement);
    setExplanation(question.explanation);
    setPositiveMarks(question.positive_marks);
    setNegativeMarks(question.negative_marks);
    const num = question.options.length;
    setOption(question.options);
    setNumOfOption(num);
  }

  function onDeleteClick(id) {
    setQuestions((prevQuestions) => {
      return prevQuestions.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();

    let optionTrue = false;
    let numOfTrueOption = 0;
    option.map((opt) => {
      if (opt.correct === true) {
        optionTrue = true;
        numOfTrueOption += 1;
      }
    });

    if (optionTrue) {
      if (numOfTrueOption === 1) {
        addQues();
      } else {
        alert("Please give only one true value for options");
      }
    } else {
      alert("Please give one true value for option");
    }
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
    setOption([]);
    setStatement("");
    setExplanation("");
    setNumOfOption(1);
  }

  function addQuiz(e) {
    e.preventDefault();

    const data = {
      name: name,
      subject: subject,
      time_limit: time,
      tags: tags,
      minimum_grade: minimumGrade,
      questions: questions,
    };

    if(name===""){
      alert("Please Enter Name");
    }else if(subject===""){
      alert("Please Enter Subject")
    }else if(time===""){
      alert("Please Enter time")
    }else if(tags===""){
      alert("Please Enter tags")
    }else{

    axios
      .post(baseURL + "quiz/add-quiz", data)
      .then((response) => {
        console.log(response.data);
        alert(response.data.data.message);
        setName("");
        setSubject("");
        setTime("");
        setTags("");
        setMinimumGrade(0);
        setQuestions([]);
      })
      .catch((error) => {
        const errorMsg = error.message;
        alert(errorMsg);
      });

    }
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
                        <Question
                          key={i}
                          id={i}
                          question={ques.statement}
                          deleteQues={onDeleteClick}
                          editQues={onEditClick}
                        />
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
                        {option.map((opt, i) => {
                          return (
                            <div className="login-form-wrapper p-3 mb-4 ">
                              <div className="row">
                                <div className="col-10">
                                  <div>Value : {opt.value}</div>
                                  <div>Correct : {opt.correct.toString()}</div>
                                </div>
                                <div className="col">
                                  <DeleteIcon
                                    onClick={() => {
                                      onDeleteOption(i);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        <SingleOption setOption={setOption} />
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

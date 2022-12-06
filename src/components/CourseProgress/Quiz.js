import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestion } from "../../redux/courseprogress/cpActions";

const Quiz = () => {
  const quiz = useSelector((state) => state.progress.currentResource);

  const firstQuestionId = quiz.questions[0];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestion(firstQuestionId));
    console.log("QUIZ QUESTIONS LENGTH", quiz.questions.length);
  }, []);

  const question = useSelector((state) => state.progress.question);

  return (
    <div className="course-details-wrapper">
      <div className="course-overview">
        <h3>{quiz.name}</h3>
        <div className="row">
          <div className="col-8">
            <h3>{question.statement}</h3>

            {question.options &&
              question.options.map((opt, index) => {
                return (
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="answers"
                      id={"flexRadioDefault" + index.toString()}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={"flexRadioDefault" + index.toString()}
                    >
                      {opt.value}
                    </label>
                  </div>
                );
              })}
          </div>
          <div className="col-4">
            {quiz.questions.map((question, index) => {
              return (
                <button
                  type="button"
                  className="btn btn-secondary mx-1 my-1"
                  onClick={() => {
                    dispatch(fetchQuestion(question));
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

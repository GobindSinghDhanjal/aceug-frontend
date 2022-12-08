import React from "react";

const QuizCourseItem = ({ quiz }) => {
  return (
    <li className="course-item">
      <a className="section-item-link" href="">
        <span className="item-name">{quiz.name}</span>
        <div className="course-item-meta">
          <span className="item-meta count-questions">
            {quiz.nQuestions} questions
          </span>
          <span className="item-meta duration">{quiz.duration} min</span>
          <span className="item-meta item-meta-icon">
            <i className="fas fa-lock-alt"></i>
          </span>
        </div>
      </a>
    </li>
  );
};

export default QuizCourseItem;

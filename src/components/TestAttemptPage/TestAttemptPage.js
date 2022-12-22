import React from "react";
import { useState } from "react";
import { Section } from "./Section";
import { Question } from "./Question";

export const TestAttemptPage = () => {
  const tests = [
    {
      name: "This is section 1",
      section: [
        {
          id: 1,
          ques: "This is ques 1",
          options: [
            {
              option: "option 1",
              correct: true,
            },
            {
              option: "option 2",
              correct: false,
            },
            {
              option: "option 3",
              correct: false,
            },
            {
              option: "option 4",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          ques: "This is ques 2",
          options: [
            {
              option: "option 1 sdvsdv",
              correct: true,
            },
            {
              option: "option 2 sdvdsv",
              correct: false,
            },
            {
              option: "option 3",
              correct: false,
            },
            {
              option: "option 4",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          ques: "This is ques 2",
          options: [
            {
              option: "option 1 sdv",
              correct: true,
            },
            {
              option: "option 2 sd",
              correct: false,
            },
            {
              option: "option 3",
              correct: false,
            },
            {
              option: "option 4 vcbcv",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          ques: "This is ques 2",
          options: [
            {
              option: "option 1 sdvsdv",
              correct: true,
            },
            {
              option: "option 2 sdvdsv",
              correct: false,
            },
            {
              option: "option 3",
              correct: false,
            },
            {
              option: "option 4",
              correct: false,
            },
          ],
        },
      ],
    },
    {
      name: "This is section 2",
      section: [
        {
          id: 3,
          ques: "This is ques 12",
          options: [
            {
              option: "option 1",
              correct: true,
            },
            {
              option: "option 2",
              correct: false,
            },
            {
              option: "option 3",
              correct: false,
            },
            {
              option: "option 4",
              correct: false,
            },
          ],
        },
        {
          id: 4,
          ques: "This is ques 23",
          options: [
            {
              option: "option 1",
              correct: true,
            },
            {
              option: "option 2",
              correct: false,
            },
            {
              option: "option 3",
              correct: false,
            },
            {
              option: "option 4",
              correct: false,
            },
          ],
        },
      ],
    },
  ];

  const [quesTitle, setQuesTitle] = useState("No Ques Selected");
  const [options, setOptions] = useState([]);

  return (
    <div className="section section-padding-bottom">
      <br />
      <br />
      <div className="container">
        <div className="row">
          <Section
            tests={tests}
            setQuesTitle={setQuesTitle}
            setOptions={setOptions}
          />
          <Question quesTitle={quesTitle} options={options} />

          <div className="col-3">
            <h4>Time : 30 mins</h4>
            <div className="card p-3">
              <div role="group" aria-label="First group">
                {tests.map((test, i) => {
                  return (
                    <div key={i}>
                      <h5>Section {i + 1}</h5>

                      {test.section.map((section, j) => {
                        return (
                          <button
                            type="button"
                            key={j}
                            className="btn btn-outline-secondary p-3 m-2"
                          >
                            {j + 1}
                          </button>
                        );
                      })}
                      <br />
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

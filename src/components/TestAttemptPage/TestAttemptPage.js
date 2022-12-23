import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Section } from "./Section";
import { Question } from "./Question";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../shared/baseUrl";

export const TestAttemptPage = () => {
  const tests2 = [
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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
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

  const [tests, setTests] = useState([]);

  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(baseURL+"testseries/test/639862b5e2e1fec3753079ec").then((response)=>{
      console.log(response.data.tests);
      setTests(response.data.tests)
    }).catch((error)=>{
      console.log(error);
    })
  },[])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAgree = () => {
    setOpen(false);
    console.log("agree");
    navigate("/")
  };

  const time = 1800;

  const [timeLeft, setTimeLeft] = useState(time);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(); // Add a ref to store the interval id

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Add a listener to `timeLeft`
  useEffect(() => {
    setMinutes(Math.floor(timeLeft / 60));
    const min = Math.floor(timeLeft / 60);
    if(timeLeft<=0){
      handleCloseAgree();
    }
    setSeconds(Math.floor(timeLeft - min * 60));
    if (timeLeft <= 0) {
      clearInterval(intervalRef.current);
    }
  }, [timeLeft]);

  const [quesTitle, setQuesTitle] = useState("No Ques Selected");
  const [currentQues, setCurrentQues] = useState({
    ques: "No question Selected",
    options: [],
  });
  const [options, setOptions] = useState([]);
  const [answers, setAnswers] = useState([]);

  function onNextQues() {
    const currentQuesId = currentQues.id;

    let sectionIndex = -1;
    let questionIndex = -1;

    tests.map((test, i) => {
      test.section.find((question, j) => {
        if (question.id === currentQuesId) {
          questionIndex = j;
          sectionIndex = i;
        }
      });
    });

    if (sectionIndex > -1 && questionIndex > -1) {
      if (tests[sectionIndex].section.length > questionIndex + 1) {
        const nextQues = tests[sectionIndex].section[questionIndex + 1];

        setCurrentQues(nextQues);
      } else {
        if (tests.length > sectionIndex + 1) {
          const nextQues = tests[sectionIndex + 1].section[0];
          setCurrentQues(nextQues);
        } else {
          console.log("Quiz finished");
        }
      }
    }
  }

  function onPrevQues() {
    const currentQuesId = currentQues.id;

    let sectionIndex = -1;
    let questionIndex = -1;

    tests.map((test, i) => {
      test.sections.find((question, j) => {
        if (question.id === currentQuesId) {
          questionIndex = j;
          sectionIndex = i;
        }
      });
    });

    if (sectionIndex > -1 && questionIndex > -1) {
      if (questionIndex > 0) {
        const prevQues = tests[sectionIndex].section[questionIndex - 1];
        setCurrentQues(prevQues);
      } else {
        if (sectionIndex > 0) {
          const element = tests[sectionIndex - 1].section.length - 1;
          const prevQues = tests[sectionIndex - 1].section[element];
          setCurrentQues(prevQues);
        } else {
          console.log("This is first ques");
        }
      }
    }
  }

  if(tests.length===0){
    return ( 
      <h1>Loading</h1>
    )
  }

  return (
    <div className="section section-padding-bottom">
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="d-block d-lg-none d-xl-none mb-3">
            <h4 className="d-block d-lg-none d-xl-none">
              Time : {minutes}:{seconds}
            </h4>
            <Button onClick={handleClickOpen} variant="contained">Submit Test</Button>
          </div>

          <Section
            classes="col-md-3 d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block"
            tests={tests}
            setCurrentQues={setCurrentQues}
            setQuesTitle={setQuesTitle}
            setOptions={setOptions}
          />

          <Question
            answers={answers}
            currentQues={currentQues}
            setCurrentQues={setCurrentQues}
            onNextQues={onNextQues}
            onPrevQues={onPrevQues}
            setAnswers={setAnswers}
            options={options}
          />

          <Section
            classes="mt-5 d-block d-lg-none d-md-block d-xl-none"
            tests={tests}
            setCurrentQues={setCurrentQues}
            setQuesTitle={setQuesTitle}
            setOptions={setOptions}
          />

          <div className="col-md-3 d-none d-lg-block">
            <h4>
              Time : {minutes}:{seconds}
            </h4>
            <Button onClick={handleClickOpen} variant="contained">
              Submit Test
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to submit the test?"}
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={handleCloseAgree} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
            <br />
            <br />
            <div className=" card p-3">
              <div role="group" aria-label="First group">
                {tests.map((test, i) => {
                  return (
                    <div key={i}>
                      <h5>Section {i + 1}</h5>

                      {test.sections.map((section, k) => {
                        
                        section.questions.map((question,j)=>{
                          let found = answers.find((q) => q.id === question.id);

                          if (found != null) {
                          return (
                            <button
                              type="button"
                              key={j}
                              id={"button-" + question.id}
                              style={{
                                backgroundColor: "limegreen",
                                color: "white",
                              }}
                              className="btn btn-outline-secondary p-3 m-2"
                            >
                              {j + 1}
                            </button>
                          );
                        }

                        return (
                          <button
                            type="button"
                            key={j}
                            id={"button-" + question.id}
                            className="btn btn-outline-secondary p-3 m-2"
                          >
                            {j + 1}
                          </button>
                        );
                        })

                        

                        

                        
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

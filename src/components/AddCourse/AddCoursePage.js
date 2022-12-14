import {
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { baseURL } from "../../shared/baseUrl";

function AddCoursePage() {
  const [instructorName, setInstructorName] = React.useState("");
  const [instructor, setInstructor] = useState([]);
  const [instructorRequired, setInstructorRequired] = useState(false);

  const [moduleName, setModuleName] = React.useState("");
  const [modules, setModules] = useState([]);
  const [addModule, setAddModule] = React.useState("none");
  const [addModuleVisible, setAddModuleVisible] = React.useState("display");
  const [moduleRequired, setModuleRequired] = useState(false);

  const [resourceName, setResourceName] = React.useState("");
  const [resourceType, setResourceType] = React.useState("");
  const [addResource, setAddResource] = React.useState("none");
  const [addResourceVisible, setAddResourceVisible] = React.useState("display");
  const [addResourceRequired, setAddResourceRequired] = useState(false);

  const [video, setVideo] = useState("");
  const [videoRequired, setVideoRequired] = useState(false);
  const [lesson, setLesson] = useState("");
  const [lessonRequired, setLessonRequired] = useState(false);
  const [quiz, setQuiz] = useState("");
  const [quizRequired, setQuizRequired] = useState(false);

  const [videoPanel, setVideoPanel] = useState("none");
  const [lessonPanel, setLessonPanel] = useState("none");
  const [quizPanel, setQuizPanel] = useState("none");

  useEffect(() => {
    handleChange5(resourceType);
  }, [resourceType]);

  useEffect(()=>{
    axios.get(baseURL+"instructors").then((response)=>{
      if(response.data.success){
        setInstructor(response.data.data);
      }else{
        console.log("Some error occurred");
        console.log(response.data);
      }
    }).catch((error)=>{
      console.log(error);
    });

    axios.get(baseURL+"modules").then((response)=>{
      if(response.data.success){
        setModules(response.data.data);
      }else{
        console.log("Some error occurred");
        console.log(response.data);
      }
    }).catch((error)=>{
      console.log(error);
    });

  },[])

  useEffect(()=>{
    console.log(instructorName)
  },[instructorName])

  const handleChange = (event) => {
    setInstructorName(event.target.value);
  };

  const handleChange2 = (event) => {
    setModuleName(event.target.value);
  };

  const handleChange3 = (event) => {
    setResourceName(event.target.value);
  };

  const handleChange4 = (event) => {
    setResourceType(event.target.value);
  };

  const handleChange5 = (resourceType) => {
    console.log("Handle Change 5");

    if (resourceType === "video") {
      setQuizPanel("none");
      setVideoPanel("block");
      setLessonPanel("none");
      setQuizRequired(false);
      setLessonRequired(false);
      setVideoRequired(true);
    }
    if (resourceType === "quiz") {
      setQuizPanel("block");
      setVideoPanel("none");
      setLessonPanel("none");
      setQuizRequired(true);
      setLessonRequired(false);
      setVideoRequired(false);
    }

    if (resourceType === "lesson") {
      setLessonPanel("block");
      setVideoPanel("none");
      setQuizPanel("none");
      setQuizRequired(false);
      setLessonRequired(true);
      setVideoRequired(false);
    }
  };

  function formSubmit(e) {
    e.preventDefault();
    console.log("hello");
    console.log(e.target.courseName);
    console.log(e.target.courseName.value);
    console.log("thumbnail");
    console.log(e.target.thumbnail.files[0]);

    const data = new FormData();

    const overview = {
      description: e.target.overviewDescription,
      iframe: e.target.overviewIframe.files[0],
    };

    data.append("name", e.target.courseName.value);
    data.append("thumbnail", e.target.thumbnail.files[0]);
    data.append("overviewDescription", e.target.overviewDescription.value);
    data.append("iframe", e.target.overviewIframe.files[0]);
    data.append("price",e.target.price.value);
    data.append("duration",e.target.duration.value);
    data.append("lectures", e.target.lectures.value);
    data.append("language", e.target.language.value);
    data.append("enrolled", e.target.enrolled.value);
    data.append("signature", e.target.signature.checked);

    console.log(data);

    axios
      .post(baseURL + "courses", data)
      .then((response)=>{
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title">Add Course</h1>
          </div>
        </div>
      </div>

      <div className="login-register-section section section-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                  <div className="login-form-wrapper">
                    <h3 className="title">Add a Course</h3>
                    <form className="login-form" onSubmit={formSubmit}>
                      <div className="single-input mb-30">
                        <label htmlFor="courseName">Course Name</label>
                        <input
                          type="text"
                          required
                          id="courseName"
                          name="courseName"
                          placeholder="Course Name"
                        />
                      </div>
                      <div className="single-input mb-30">
                        <label htmlFor="thumbnail">Thumbnail</label>
                        <input
                        className="form-control"
                          type="file"
                          required
                          id="thumbnail"
                          name="thumbnail"
                        />
                      </div>
                      <br />
                      <br />
                      <div className="single-input mb-30">
                        <label htmlFor="overviewDescription">
                          Overview Description
                        </label>
                        <input
                          type="text"
                          required
                          id="overviewDescription"
                          name="overviewDescription"
                          placeholder="Overview Description"
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="overviewDescription">
                          Overview iFrame
                        </label>
                        <input
                        className="form-control"
                          type="file"
                          required
                          id="overviewIframe"
                          name="overviewIframe"
                          placeholder="Overview Iframe"
                        />
                      </div>

                      <br />
                      <br />

                      <div
                        className="single-input mb-30"
                        style={{ display: addModuleVisible }}
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Module Name
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="instructorName"
                            value={moduleName}
                            label="Module Name"
                            onChange={handleChange2}
                          >
                          {modules.map((module, index)=>{
                            return(
                              <MenuItem key={index} value={module}>{module.name}</MenuItem>
                            )
                           
                          })}
                          </Select>
                        </FormControl>
                      </div>

                      <div
                        style={{ display: addModuleVisible }}
                        className="single-input mb-30"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setAddModule("block");
                            setAddModuleVisible("none");
                            setModuleRequired(true);
                          }}
                          className="btn btn-primary btn-hover-secondary"
                        >
                          Not Found Module? Click Here to Add
                        </button>
                      </div>

                      <div style={{ display: addModule }}>
                        <div className="single-input mb-30">
                          <label htmlFor="moduleName">Module Name</label>
                          <input
                            type="text"
                            required={moduleRequired}
                            id="moduleName"
                            name="moduleName"
                            placeholder="Module Name"
                          />
                        </div>

                        <div className="single-input mb-30">
                          <label htmlFor="moduleDescription">
                            Module Description
                          </label>
                          <input
                            type="text"
                            required={moduleRequired}
                            id="moduleDescription"
                            name="moduleDescription"
                            placeholder="Module Description"
                          />
                        </div>

                        <div
                          className="single-input mb-30"
                          style={{ display: addResourceVisible }}
                        >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Resource Name
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="resourceName"
                              value={resourceName}
                              label="Resource Name"
                              onChange={handleChange3}
                            >
                              <MenuItem value={"Resource 1"}>
                                Resource 1
                              </MenuItem>
                              <MenuItem value={"Resource 2"}>
                                Resource 2
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>

                        <div
                          style={{ display: addResourceVisible }}
                          className="single-input mb-30"
                        >
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setAddResource("block");
                              setAddResourceVisible("none");
                              setAddResourceRequired(true);
                            }}
                            className="btn btn-primary btn-hover-secondary"
                          >
                            Not Found Resource? Click Here to Add
                          </button>
                        </div>

                        <div style={{ display: addResource }}>
                          <div className="single-input mb-30">
                            <label htmlFor="moduleResourcesName">
                              Module Resources Name
                            </label>
                            <input
                              type="text"
                              required={addResourceRequired}
                              id="moduleResourcesName"
                              name="moduleResourcesName"
                              placeholder="Module Resources Name"
                            />
                          </div>

                          <div className="single-input mb-30">
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                Module Resource Type
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="resourceType"
                                value={resourceType}
                                label="Module Resource Type"
                                onChange={handleChange4}
                              >
                                <MenuItem value={"video"}>Video</MenuItem>
                                <MenuItem value={"lesson"}>Lesson</MenuItem>
                                <MenuItem value={"quiz"}>Quiz</MenuItem>
                              </Select>
                            </FormControl>
                          </div>

                          <div
                            style={{ display: videoPanel }}
                            className="single-input mb-30"
                          >
                            <label htmlFor="videoUrl">Video</label>
                            <input
                              type="file"
                              className="form-control"
                              required={videoRequired}
                              id="videoUrl"
                              name="videoUrl"
                            />
                          </div>

                          <div
                            style={{ display: quizPanel }}
                            className="single-input mb-30"
                          >
                            <label htmlFor="quiz">Quiz</label>
                            <input
                              type="text"
                              required={quizRequired}
                              id="quiz"
                              name="quiz"
                              placeholder="Quiz"
                            />
                          </div>

                          <div
                            style={{ display: lessonPanel }}
                            className="single-input mb-30"
                          >
                            <label htmlFor="lesson">Lesson</label>
                            <input
                              type="text"
                              required={lessonRequired}
                              id="lesson"
                              name="lesson"
                              placeholder="Lesson"
                            />
                          </div>

                          <div className="single-input mb-30">
                            <label htmlFor="moduleResourcesDuration">
                              Module Resources Duration
                            </label>
                            <input
                              type="number"
                              required={addResourceRequired}
                              id="moduleResourcesDuration"
                              name="moduleResourcesDuration"
                              placeholder="Module Resources Duration"
                            />
                          </div>

                          <div className="single-input mb-30">
                            <label htmlFor="moduleResourcesNextResource">
                              Module Resources Next Resource
                            </label>
                            <input
                              type="text"
                              required={addResourceRequired}
                              id="moduleResourcesNextResource"
                              name="moduleResourcesNextResource"
                              placeholder="Module Resources Next Resource"
                            />
                          </div>

                          <div className="single-input mb-30">
                            <label htmlFor="moduleResourcesNextModule">
                              Module Resources Next Module
                            </label>
                            <input
                              type="text"
                              required={addResourceRequired}
                              id="moduleResourcesNextModule"
                              name="moduleResourcesNextModule"
                              placeholder="Module Resources Next Module"
                            />
                          </div>
                        </div>
                      </div>

                      <br />
                      <br />

                      <div className="single-input mb-30">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Instructor Name
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="instructorName"
                            value={instructorName}
                            label="Instructor Name"
                            onChange={handleChange}
                          >
                          {instructor.map((instructor, index)=>{
                            return(
                              <MenuItem key={index} value={instructor}>{instructor.name}</MenuItem>
                            )
                          })}
                          </Select>
                        </FormControl>
                      </div>

                      {/* <div className="single-input mb-30">
                        <label htmlFor="instructorAbout">
                          Instructor About
                        </label>
                        <input
                          type="text"
                          required
                          id="instructorAbout"
                          name="instructorAbout"
                          placeholder="Instructor About"
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="instructorDesignation">
                          Instructor Designation
                        </label>
                        <input
                          type="text"
                          required
                          id="instructorDesignation"
                          name="instructorDesignation"
                          placeholder="Instructor Designation"
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="instructorSocialLinkPlatform">
                          Instructor Social Link Platform
                        </label>
                        <input
                          type="text"
                          required
                          id="instructorSocialLinkPlatform"
                          name="instructorSocialLinkPlatform"
                          placeholder="Instructor Social Link Platform"
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="instructorSocialLinkUrl">
                          Instructor Social Link Url
                        </label>
                        <input
                          type="text"
                          required
                          id="instructorSocialLinkUrl"
                          name="instructorSocialLinkUrl"
                          placeholder="Instructor Social Link Url"
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="instructorCourses">
                          Instructor Courses
                        </label>
                        <input
                          type="text"
                          required
                          id="instructorCourses"
                          name="instructorCourses"
                          placeholder="Instructor Courses"
                        />
                      </div> */}

                      <br />
                      <br />

                      <div className="single-input mb-30">
                        <label htmlFor="price">Price</label>
                        <input
                          type="number"
                          required
                          id="price"
                          name="price"
                          placeholder="Price"
                        />
                      </div>

                      {/* <div className="single-input mb-30">
                        <label htmlFor="reviewRating">Review Rating</label>
                        <input
                          type="number"
                          required
                          id="reviewRating"
                          name="reviewRating"
                          placeholder="Review Rating"
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="reviewComment">Review Comment</label>
                        <input
                          type="text"
                          required
                          id="reviewComment"
                          name="reviewComment"
                          placeholder="Review Comment"
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="reviewStudent">Review Student</label>
                        <input
                          type="text"
                          required
                          id="reviewStudent"
                          name="reviewStudent"
                          placeholder="Review Student"
                        />
                      </div> */}

                      <br />
                      <br />

                      <div className="single-input mb-30">
                        <label htmlFor="duration">Duration</label>
                        <input
                          type="number"
                          required
                          id="duration"
                          name="duration"
                          placeholder="Duration"
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="lectures">Lectures</label>
                        <input
                          type="number"
                          required
                          id="lectures"
                          name="lectures"
                          placeholder="Lectures"
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="language">Language</label>
                        <input
                          type="text"
                          required
                          id="language"
                          name="language"
                          placeholder="Language"
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="enrolled">Enrolled</label>
                        <input
                          type="number"
                          required
                          id="enrolled"
                          name="enrolled"
                          placeholder="Enrolled"
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="signature">Signature &nbsp;</label>
                        <input
                        className="form-check-input"
                          type="checkbox"
                          id="signature"
                          name="signature"
                        />
                      </div>

                      <div className="single-input">
                        <button
                          type="submit"
                          className="btn btn-primary btn-hover-secondary btn-width-100"
                        >
                          Add Course
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
}

export default AddCoursePage;

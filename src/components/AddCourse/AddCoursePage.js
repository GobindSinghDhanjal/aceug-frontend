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
import DeleteIcon from "@mui/icons-material/Delete";

function AddCoursePage() {
  const [instructorName, setInstructorName] = React.useState("");
  const [instructor, setInstructor] = useState([]);
  const [instructors, setInstructors] = useState([]);

  const [thumbnail, setThumbnail] = useState("");

  const [moduleName, setModuleName] = React.useState("");
  const [module, setModule] = useState([]);
  const [modules, setModules] = useState([]);
  const [addModule, setAddModule] = React.useState("none");
  const [addModuleVisible, setAddModuleVisible] = React.useState("display");
  const [moduleRequired, setModuleRequired] = useState(false);

  const [newModuleName, setNewModuleName] = useState("");
  const [newModuleDescription, setNewModuleDescription] = useState("");

  const [resourceName, setResourceName] = React.useState("");
  const [resourceType, setResourceType] = React.useState("");
  const [addResource, setAddResource] = React.useState("none");
  const [addResourceVisible, setAddResourceVisible] = React.useState("display");
  const [addResourceRequired, setAddResourceRequired] = useState(false);
  const [resource, setResource] = useState([]);
  const [resources, setResources] = useState([]);

  const [newResourceName, setNewResourceName] = useState("");
  const [newResourceDuration, setNewResourceDuration] = useState("");
  const [newResourceNextResource, setNewResourceNextResource] = useState("");
  const [newResourceNextModule, setNewResourceNextModule] = useState("");

  const [video, setVideo] = useState("");
  const [videoRequired, setVideoRequired] = useState(false);
  const [lesson, setLesson] = useState("");
  const [lessonRequired, setLessonRequired] = useState(false);

  const [videoPanel, setVideoPanel] = useState("none");
  const [lessonPanel, setLessonPanel] = useState("none");

  useEffect(() => {
    handleChange5(resourceType);
  }, [resourceType]);

  useEffect(() => {
    if (moduleRequired) {
      axios.get(baseURL + "resources").then((response) => {
        if (response.data.success) {
          setResource(response.data.data);
        } else {
          console.log("Some error occurred");
          console.log(response.data);
        }
      });
    }
  }, [moduleRequired]);

  useEffect(() => {
    axios
      .get(baseURL + "instructors")
      .then((response) => {
        if (response.data.success) {
          setInstructor(response.data.data);
        } else {
          console.log("Some error occurred");
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(baseURL + "modules")
      .then((response) => {
        if (response.data.success) {
          setModule(response.data.data);
        } else {
          console.log("Some error occurred");
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (moduleName) {
      setModules((prevValue) => [...prevValue, moduleName]);
    }
  }, [moduleName]);

  useEffect(() => {
    if (instructorName) {
      setInstructors((prevValue) => [...prevValue, instructorName]);
    }
  }, [instructorName]);

  useEffect(() => {
    if (resourceName) {
      setResources((prevValue) => [...prevValue, resourceName]);
    }
  }, [resourceName]);

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

  const deleteModule = (id) => {
    setModules((prevModules) => {
      return prevModules.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const deleteResource = (id) => {
    setResources((prevModules) => {
      return prevModules.filter((item, index) => {
        return index !== id;
      });
    });
  };

  // const thumbnailChange = (e) =>{
  //   const reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);

  //   reader.onloadend = ()=>{
  //     setThumbnail(JSON.stringify(reader.result))
  //   }
  // }

  const addNewModule = (e) => {
    e.preventDefault();

    if(newModuleName===""){
      alert("Please Enter Module Name");
      return;
    }
    if(newModuleDescription===""){
      alert("Please Enter Module Description");
      return;
    }
    if(resources.length===0){
      alert("Please Enter Resource");
      return;
    }
    const newMod = {
      name: newModuleName,
      description: newModuleDescription,
      resources: JSON.stringify(resources),
    };
  

    axios
      .post(baseURL + "modules/new-module", newMod)
      .then((response) => {
        console.log(response.data);
        setModules((prevValue) => [...prevValue, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });

    setNewModuleName("");
    setNewModuleDescription("");
    setResources([]);
  };

  const addNewResource = (e) => {
    e.preventDefault();

    if(newResourceName===""){
      alert("Please Enter Resource Name");
      return;
    }
    if(newResourceDuration===""){
      alert("Please Enter Resource Duration");
      return;
    }

    if(resourceType===""){
      alert("Please Enter Resource Type")
      return;
    }

    if(newResourceNextResource ===""){
      alert("Please Enter Next Resource")
      return
    }
    if(newResourceNextModule===""){
      alert("Please enter resource next module")
      return;
    }

    let content = "";

    if(videoRequired){
      if(video===""){
        alert("Please Enter Video url");
        return;
      }else{
        content=video;
      }
    }

    if(lessonRequired){
      if(lesson===""){
        alert("Please Enter Lesson");
        return;
      }else{
        content=lesson;
      }
    }

    const data = {
      name: newResourceName,
      duration: newResourceDuration,
      type: resourceType,
      nextResource: newResourceNextResource,
      nextModule: newResourceNextModule,
      content: content
    };
  

    axios
      .post(baseURL + "resources", data)
      .then((response) => {
        console.log(response.data);
        setResources((prevValue) => [...prevValue, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });

      setNewResourceName("");
      setNewResourceDuration("");
      setNewResourceNextResource("");
      setNewResourceNextModule("");
      content="";

  };

  useEffect(() => {
    console.log(modules);
  }, [modules]);

  const deleteInstructor = (id) => {
    setInstructors((prevInstructor) => {
      return prevInstructor.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const handleChange5 = (resourceType) => {
    if (resourceType === "video") {

      setVideoPanel("block");
      setLessonPanel("none");

      setLessonRequired(false);
      setVideoRequired(true);
    }

    if (resourceType === "lesson") {
      setLessonPanel("block");
      setVideoPanel("none");
      setLessonRequired(true);
      setVideoRequired(false);
    }
  };

  function formSubmit(e) {
    e.preventDefault();

    const data = new FormData();


    data.append("name", e.target.courseName.value);
    data.append("thumbnail", e.target.thumbnail.files[0]);
    // data.append("thumbnail", thumbnail);
    data.append("overviewDescription", e.target.overviewDescription.value);
    data.append("iframe", e.target.overviewIframe.value);

    data.append("modules", JSON.stringify(modules));

    data.append("instructors", JSON.stringify(instructors));
    data.append("price", e.target.price.value);
    data.append("duration", e.target.duration.value);
    data.append("lectures", e.target.lectures.value);
    data.append("language", e.target.language.value);
    data.append("enrolled", e.target.enrolled.value);
    data.append("signature", e.target.signature.checked);

    axios
      .post(baseURL + "courses", data)
      .then((response) => {
        console.log(response);
        alert("Course Added successfully");
        window.location.href = "/add-course"
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
                          // onChange={thumbnailChange}
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
                          type="text"
                          required
                          id="overviewIframe"
                          name="overviewIframe"
                          placeholder="Overview Iframe"
                        />
                      </div>

                      <br />
                      <br />

                      <div className="login-form-wrapper p-3 mb-4">
                        <div className="row p-3 ">
                          {modules.length === 0 ? (
                            <div className="login-form-wrapper p-3 mb-4">
                              No Module Added
                            </div>
                          ) : (
                            modules.map((module, i) => {
                              return (
                                <div
                                  key={i}
                                  className="login-form-wrapper p-3 mb-4"
                                >
                                  <div className="row">
                                    <div className="col-md-10 col-lg-11">
                                      {module.name}
                                    </div>
                                    <div className="col-md-2 col-lg-1">
                                      <DeleteIcon
                                        key={i}
                                        onClick={() => {
                                          deleteModule(i);
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </div>
                        <div className="row">
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
                                {module.map((module, index) => {
                                  return (
                                    <MenuItem key={index} value={module}>
                                      {module.name}
                                    </MenuItem>
                                  );
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
                              className="btn btn-primary btn-hover-secondary mw-100"
                            >
                              Not Found Module? Add Now
                            </button>
                          </div>

                          <div style={{ display: addModule }}>
                            <div className="single-input mb-30">
                              <label htmlFor="moduleName">Module Name</label>
                              <input
                                type="text"
                                id="moduleName"
                                name="moduleName"
                                placeholder="Module Name"
                                value={newModuleName}
                                onChange={(e) =>
                                  setNewModuleName(e.target.value)
                                }
                              />
                            </div>

                            <div className="single-input mb-30">
                              <label htmlFor="moduleDescription">
                                Module Description
                              </label>
                              <input
                                type="text"
                                id="moduleDescription"
                                name="moduleDescription"
                                placeholder="Module Description"
                                value={newModuleDescription}
                                onChange={(e) =>
                                  setNewModuleDescription(e.target.value)
                                }
                              />
                            </div>

                            <div className="login-form-wrapper p-3 mb-4">
                              <div className="row p-3">
                                {resources.length === 0 ? (
                                  <div className="login-form-wrapper p-3 mb-4">
                                    No Resource Added
                                  </div>
                                ) : (
                                  resources.map((res, i) => {
                                    return (
                                      <div
                                        key={i}
                                        className="login-form-wrapper p-3 mb-4"
                                      >
                                        <div className="row">
                                          <div className="col-md-10 col-lg-11">
                                            {res.name}
                                          </div>
                                          <div className="col-md-2 col-lg-1">
                                            <DeleteIcon
                                              key={i}
                                              onClick={() => {
                                                deleteResource(i);
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })
                                )}
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
                                    {resource.map((res, i) => {
                                      return (
                                        <MenuItem key={i} value={res}>
                                          {res.name}
                                        </MenuItem>
                                      );
                                    })}
                                  </Select>
                                </FormControl>
                              </div>
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
                                className="btn btn-primary btn-hover-secondary mw-100"
                              >
                                Not Found Resource? Click Here to Add
                              </button>
                            </div>

                            <div
                              style={{ display: addResourceVisible }}
                              className="single-input mb-30"
                            >
                              <button
                                onClick={addNewModule}
                                className="btn btn-primary btn-hover-secondary w-100"
                              >
                                Add Module
                              </button>
                            </div>

                            <div style={{ display: addResource }}>
                              <div className="single-input mb-30">
                                <label htmlFor="moduleResourcesName">
                                  Module Resources Name
                                </label>
                                <input
                                  type="text"
                                  id="moduleResourcesName"
                                  name="moduleResourcesName"
                                  placeholder="Module Resources Name"
                                  value={newResourceName}
                                  onChange={e=>setNewResourceName(e.target.value)}
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
                                  </Select>
                                </FormControl>
                              </div>

                              <div
                                style={{ display: videoPanel }}
                                className="single-input mb-30"
                              >
                                <label htmlFor="videoUrl">Video</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="videoUrl"
                                  name="videoUrl"
                                  value={video}
                                  onChange={e=>setVideo(e.target.value)}
                                />
                              </div>

                              <div
                                style={{ display: lessonPanel }}
                                className="single-input mb-30"
                              >
                                <label htmlFor="lesson">Lesson</label>
                                <input
                                  type="text"
                                  id="lesson"
                                  name="lesson"
                                  placeholder="Lesson"
                                  value={lesson}
                                  onChange={e=>setLesson(e.target.value)}
                                />
                              </div>

                              <div className="single-input mb-30">
                                <label htmlFor="moduleResourcesDuration">
                                  Module Resources Duration
                                </label>
                                <input
                                  type="number"
                                  id="moduleResourcesDuration"
                                  name="moduleResourcesDuration"
                                  placeholder="Module Resources Duration"
                                  value={newResourceDuration}
                                  onChange={e=>setNewResourceDuration(e.target.value)}
                                />
                              </div>

                              <div className="single-input mb-30">
                                <label htmlFor="moduleResourcesNextResource">
                                  Module Resources Next Resource
                                </label>
                                <input
                                  type="text"
                                  id="moduleResourcesNextResource"
                                  name="moduleResourcesNextResource"
                                  placeholder="Module Resources Next Resource"
                                  value={newResourceNextResource}
                                  onChange={e=>setNewResourceNextResource(e.target.value)}
                                />
                              </div>

                              <div className="single-input mb-30">
                                <label htmlFor="moduleResourcesNextModule">
                                  Module Resources Next Module
                                </label>
                                <input
                                  type="text"
                                  id="moduleResourcesNextModule"
                                  name="moduleResourcesNextModule"
                                  placeholder="Module Resources Next Module"
                                  value={newResourceNextModule}
                                  onChange={e=>setNewResourceNextModule(e.target.value)}
                                />
                              </div>
                              <div
                              className="single-input mb-30"
                            >
                              <button
                                onClick={addNewResource}
                                className="btn btn-primary btn-hover-secondary"
                              >
                                Add Resource
                              </button>
                            </div>
                            <div
                              className="single-input mb-30"
                            >
                              <button
                                onClick={addNewModule}
                                className="btn btn-primary btn-hover-secondary"
                              >
                                Add Module
                              </button>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <br />
                      <br />

                      <div className="login-form-wrapper p-3 mb-4">
                        <div className="row p-3">
                          {instructors.length === 0 ? (
                            <div className="login-form-wrapper p-3 mb-4">
                              No Instructor Added
                            </div>
                          ) : (
                            instructors.map((instructor, i) => {
                              return (
                                <div
                                  key={i}
                                  className="login-form-wrapper p-3 mb-4"
                                >
                                  <div className="row">
                                    <div className="col-md-10 col-lg-11">
                                      {instructor.name}
                                    </div>
                                    <div className="col-md-2 col-lg-1">
                                      <DeleteIcon
                                        key={i}
                                        onClick={() => {
                                          deleteInstructor(i);
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </div>
                        <div className="row">
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
                                {instructor.map((instructor, index) => {
                                  return (
                                    <MenuItem key={index} value={instructor}>
                                      {instructor.name}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                            </FormControl>
                          </div>
                        </div>
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

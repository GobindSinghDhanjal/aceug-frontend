import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../shared/baseUrl";
import CourseTile from "./CourseTile";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    
    axios
      .get(baseURL + "courses")
      .then((data) => data.data)
      .then((courses) => {setCourses(courses)
        console.log("cascsacassc");
      console.log(courses);} )
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title">Courses</h1>
          </div>
        </div>
      </div>

      <div className="section section-padding-bottom">
        <div className="container">
          <div className="row justify-content-between align-items-center max-mb-20">
            <div className="col-sm-auto col-12 max-mb-10">
              <p className="result-count">
                We found <span>{courses.length}</span> courses available for you
              </p>
            </div>
          </div>

          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
            {courses.map((course) => (
              <CourseTile course={course} />
            ))}
          </div>

          <div className="row max-mt-50">
            <div className="col text-center">
              <a
                href="JavaScript:Void(0);"
                className="btn btn-outline-primary load-more-btn"
              >
                Load More <i className="fal fa-redo ms-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;

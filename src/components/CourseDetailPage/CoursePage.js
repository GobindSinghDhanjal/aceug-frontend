import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchCourse } from "../../redux/courses/courseActions";
import Curriculum from "./Curriculum";
import Instructors from "./Instructors";
import Overview from "./Overview";
import Reviews from "./Reviews";
import SideBar from "./SideBar";
import { baseURL } from "../../shared/baseUrl";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CoursePage = () => {
  const [course, setCourse] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const id=searchParams.get("courseId")
  // const id = useParams();

  useEffect(() => {

    axios
    .get(baseURL + "courses/course/"+ id.toString())
    .then((data) =>
    data.data
    )
    .then((course) => {
      setCourse(course);
    })
    .catch((err) => console.log(err));
  }, []);

  if(!course){
    return( <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>)
  }
  
  return (
    
      <>
        <div className="page-title-section section">
          <div className="page-title">
            <div className="container">
              <h1 className="title">{course.name}</h1>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row max-mb-n50">
              <div className="col-lg-8 col-12 order-lg-1 max-mb-50">
                <div className="course-details-wrapper">
                  <div className="course-nav-tab">
                    <ul className="nav">
                      <li>
                        <a
                          className="active"
                          data-bs-toggle="tab"
                          href="#overview"
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#curriculum">
                          Curriculum
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#instructor">
                          Instructor
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#reviews">
                          Reviews
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content mb-5">
                    <Overview overview={(course.overview)} />

                    <Curriculum modules={course.modules} />

                    <Instructors instructors={course.instructors} />

                    <Reviews data={course.reviews} />
                  </div>
                </div>
              </div>

              <SideBar course={course} />
            </div>
          </div>
        </div>
      </>
    )
};

export default CoursePage;

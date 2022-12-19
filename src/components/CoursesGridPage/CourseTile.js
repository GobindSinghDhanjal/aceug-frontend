import React from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../../shared/baseUrl";

const CourseTile = ({ course }) => {

  const url = "/course?courseId="+course._id;

  return (
    <>
      <div className="col max-mb-30" data-aos="fade-up">
        <div className="course-2">
          <div className="thumbnail">
            <Link to={url} className="image">
              <img src={course.thumbnail} alt="Course Image" height={200} />
            </Link>
          </div>
          <div className="info">
            <span className="price p-5">₹{course.price}</span>
            <span className="date">{course.createdOn}</span>
            <h3 className="title" style={{textAlign: "left"}}>
              <Link to={url}>{course.name}</Link>
            </h3>
            <ul className="meta p-0 m-0">
              <li>
                <i className="far fa-file-alt"></i>
                {course.duration} Weeks
              </li>
            </ul>
            <div className="lp-course-buttons mt-2">
                  <button
                    className="btn btn-primary btn-hover-secondary btn-width-100"
         
                  >
                    Enroll
                  </button>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseTile;

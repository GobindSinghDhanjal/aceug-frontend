import React from "react";
import { Link } from "react-router-dom";

const CourseTile = ({ course }) => {
  return (
    <>
      <div className="col max-mb-30" data-aos="fade-up">
        <div className="course-2">
          <div className="thumbnail">
            <Link to={course._id} className="image">
              {" "}
              <img src={course.thumbnail} alt="Course Image" height={200} />
            </Link>
          </div>
          <div className="info">
            <span className="price p-5">Rs {course.price}</span>
            <span className="date">{course.createdOn}</span>
            <h3 className="title">
              <a href="course-details-standard-sidebar.html">{course.name}</a>
            </h3>
            <ul className="meta">
              <li>
                <i className="far fa-file-alt"></i>
                {course.duration} Weeks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseTile;

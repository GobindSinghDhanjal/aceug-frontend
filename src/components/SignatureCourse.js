import React from "react";
import { Link } from "react-router-dom";
import { format } from 'date-fns';


export const SignatureCourse = ({ course }) => {

  const url = "/course/"+course._id;

    return(
        <div className="col max-mb-30" data-aos="fade-up">
        <div className="course-2">
          <div className="thumbnail">
            <Link
              to={url}
              className="image"
            >
              <img
                src={course.thumbnail}
                alt="Course Image"
                height={240}
              />
            </Link>
          </div>
          <div className="info">
            <span className="price p-5">₹{course.price}</span>
            <span className="date">{format(new Date(course.createdAt), 'PP')}</span>
            <h3 className="title">
              <a href="course-details-sticky-feature-bar.html">
                {course.name}
              </a>
            </h3>
          </div>
        </div>
      </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";

export const BlogTile = ({ blog }) => {
  const url = "/blog?title=" + blog.title;
  return (
    <>
      <div className="col max-mb-30" data-aos="fade-up">
        <div className="course-2">
          <div className="thumbnail">
            <Link to={url} className="image">
              <img src={blog.thumbnail} alt="Course Image" height={200} />
            </Link>
          </div>
          <div className="info">
            <span className="date">{blog.createdOn}</span>
            <h3 className="title">
              <Link to={url}>{blog.title}</Link>
            </h3>
            <div className="lp-course-buttons mt-2">
              <button className="btn btn-primary btn-hover-secondary btn-width-100">
                Read Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

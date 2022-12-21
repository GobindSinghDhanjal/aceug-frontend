import React from 'react'
import { Link } from 'react-router-dom';

export const TestSeriesTile = ({testSeries}) => {

    const url = "/test-series-detail?Id="+testSeries._id;
  return (
    <>
    <div className="col max-mb-30" data-aos="fade-up">
      <div className="course-2">
        <div className="thumbnail">
          <Link to={url} className="image">
            <img src={testSeries.thumbnail} alt="Course Image" height={200} />
          </Link>
        </div>
        <div className="info">
        {testSeries.price===0||null?(<span className="price p-5">Free</span>): <span className="price p-5">₹{testSeries.price}</span>}
         
          <span className="date">{testSeries.createdOn}</span>
          <h3 className="title" style={{textAlign: "left"}}>
            <Link to={url}>{testSeries.name}</Link>
          </h3>
         
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
  )
}

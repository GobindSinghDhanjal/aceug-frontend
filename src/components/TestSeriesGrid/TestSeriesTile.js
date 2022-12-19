import React from 'react'
import { Link } from 'react-router-dom';

export const TestSeriesTile = ({testSeries}) => {

    const url = "/testSeries?Id="+testSeries._id;
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
          <span className="price p-5">₹{testSeries.price}</span>
          <span className="date">{testSeries.createdOn}</span>
          <h3 className="title">
            <Link to={url}>{testSeries.name}</Link>
          </h3>
          <ul className="meta">
            <li>
              <i className="far fa-file-alt"></i>
              {testSeries.duration} Weeks
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}

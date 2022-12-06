import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResource } from "../../redux/courseprogress/cpActions";
import Quiz from "./Quiz";
import Reading from "./Reading";
import Video from "./Video";

const CurrentResource = () => {
  const resource = useSelector((state) => state.progress.currentResource);
  const dispatch = useDispatch();

  switch (resource.type) {
    case "video":
      return (
        <>
          <Video />
          <div className="row">
            <div className="col-6">
              {" "}
              <div className="lp-course-buttons">
                <button className="btn btn-primary btn-hover-secondary btn-width-100">
                  Previous
                </button>
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="lp-course-buttons">
                <button className="btn btn-primary btn-hover-secondary btn-width-100">
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      );
    case "quiz":
      return (
        <>
          <Quiz />
          <div className="row">
            <div className="col-6">
              {" "}
              <div className="lp-course-buttons">
                <button className="btn btn-primary btn-hover-secondary btn-width-100">
                  Previous
                </button>
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="lp-course-buttons">
                <button className="btn btn-primary btn-hover-secondary btn-width-100">
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      );
    case "lesson":
      return (
        <>
          <Reading />
          <div className="row">
            <div className="col-6">
              {" "}
              <div className="lp-course-buttons">
                <button className="btn btn-primary btn-hover-secondary btn-width-100">
                  Previous
                </button>
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="lp-course-buttons">
                <button
                  className="btn btn-primary btn-hover-secondary btn-width-100"
                  onClick={() => dispatch(fetchResource(resource.nextResource))}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      );
    default:
      return <>Hi</>;
  }
};

export default CurrentResource;

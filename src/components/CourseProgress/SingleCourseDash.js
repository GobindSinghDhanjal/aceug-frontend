import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProgress } from "../../redux/courseprogress/cpActions";

import Accordion from "./Accordion";
import CurrentResource from "./CurrentResource";

function SingleCourseDash() {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress.courseProgress);

  useEffect(() => {
    dispatch(fetchProgress(1));
  }, []);

  return (
    <>
      <div className="section mt-5">
        <div className="container-fluid">
          <div className="row max-mb-n50">
            <div className="col-lg-3 col-12 order-lg-1 max-mb-50">
              {progress.modules &&
                progress.modules.map((module, index) => {
                  return (
                    <Accordion module={module} index={index} key={index} />
                  );
                })}
            </div>
            <div className="col-lg-9 col-12 order-lg-1 max-mb-50">
              <p></p>

              <CurrentResource />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCourseDash;

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import SideBar from "./SideBar";
import { baseURL } from "../../shared/baseUrl";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import LockOpenIcon from '@mui/icons-material/LockOpen';

export const TestSeriesDetail = () => {
  const [testSeries, setTestSeries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("Id");
  // const id = useParams();

  useEffect(() => {
    axios
      .get(baseURL + "testseries/test/" + id.toString())
      .then((data) => data.data)
      .then((testSeries) => {
        setTestSeries(testSeries);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!testSeries) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title">{testSeries.name}</h1>
            <br />
            <img src={testSeries.thumbnail} alt="test thumbnail" height="490px" />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row max-mb-n50">
            <div className="col-lg-8 col-12 order-lg-1 max-mb-50">
              <div className="course-details-wrapper">
                <div className="tab-content mb-5">
                  {testSeries &&
                    testSeries.tests &&
                    testSeries.tests.map((test) => {
                      return (
                        <div className="login-form-wrapper p-3 mb-4">
                          <div className="row">
                            <div className="col-9">
                              <h1>{test.name}</h1>
                            </div>
                            <div className="col">
                              <button className="btn btn-primary btn-hover-secondary btn-width-100">
                                Unlock <LockOpenIcon/>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            <SideBar testSeries={testSeries} />
          </div>
        </div>
      </div>
    </>
  );
};

// export default TestSeriesDetail;

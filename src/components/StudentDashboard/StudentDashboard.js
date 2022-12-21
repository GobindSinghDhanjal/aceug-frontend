import React, { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { Card, Title, DonutChart, Button, Metric } from "@tremor/react";
import { CourseProgressTile } from "./CourseProgressTile";
import { TestProgressTile } from "./TestProgressTile";
import { useNavigate } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import axios from "axios";
import { baseURL } from "../../shared/baseUrl";
import { useNewUser } from "../../Hooks/useNewUser";

export const StudentDashboard = () => {
  const user = useUser();

  console.log(user);

  const navigate = useNavigate();

  if (!user) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h1 className="text-center m-3 p-5">Student Dashboard</h1>
      <Button
        size="md"
        marginTop="mt-3"
        importance="primary"
        text="Play Quiz"
        className="center"
        handleClick={() => navigate("/quiz-game")}
      />
      <div className="row">
        <div className="col-3 mt-2">
          <Card maxWidth="max-w-lg">
            <Metric>Hi, {user ? user.name : "No User"}</Metric>

            <hr />
            <Title>Welcome Back !!!</Title>
          </Card>

          <div className="text-center center">
            <Button
              size="md"
              marginTop="mt-3"
              importance="primary"
              text="Update Profile"
              handleClick={() => console.log("clicked")}
            />

            <Button
              size="md"
              marginTop="mt-3"
              importance="primary"
              text="LogOut"
              handleClick={() => localStorage.clear()}
            />
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="card p-5 m-2">
              <h4> Courses in progress </h4>
              <div className=" row card-body align-left">
                {user.courses_enrolled.map((course, i) => {
                  return (
                    <div className="col-md-6">
                      <CourseProgressTile key={i} course={course} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card p-5 m-2">
              <h4>Test Series in progress </h4>
              <div className=" row card-body align-left">
                {user.series_enrolled.map((series, i) => {
                  return (
                    <div className="col-md-6">
                      <TestProgressTile key={i} series={series} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

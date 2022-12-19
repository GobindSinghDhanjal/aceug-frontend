import React from 'react'
import { Swiper } from 'swiper/react'
import { Card, Title, DonutChart, Button, Metric } from '@tremor/react';
import { CourseProgressTile } from './CourseProgressTile';
import { TestProgressTile } from './TestProgressTile';
import { useNavigate } from 'react-router-dom';



export const StudentDashboard = () => {
  const cities = [
    {
        name: 'New York',
        sales: 9800,
    },
    {
        name: 'London',
        sales: 4567,
    },
    {
        name: 'Hong Kong',
        sales: 3908,
    },
    {
        name: 'San Francisco',
        sales: 2400,
    },
    {
        name: 'Singapore',
        sales: 1908,
    },
    {
        name: 'Zurich',
        sales: 1398,
    },
];

const valueFormatter = (number) => (
  `$ ${Intl.NumberFormat('us').format(number).toString()}`
);

const navigate = useNavigate();
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
          
            <Metric>Hi, Raj</Metric>

            <hr />
            <Title>Welcome Back !!!</Title>
        <DonutChart
            data={ cities }
            category="sales"
            dataKey="name"
            valueFormatter={ valueFormatter }
            marginTop="mt-6"
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
        />
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
                  <div className="col-md-6">
                  <CourseProgressTile />
                  </div>
                  <div className="col-md-6">
                  <CourseProgressTile />
                  </div>
                
                  </div>
                 
                </div>

                <div className="card p-5 m-2">
                 <h4>Test Series in progress </h4>
                  <div className=" row card-body align-left">
                  <div className="col-md-6">
                  <TestProgressTile />
                  </div>
                  <div className="col-md-6">
                  <TestProgressTile />
                  </div>
                
                  </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

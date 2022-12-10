import Landing from "./components/Landing";
import Courses from "./components/CoursesGridPage/Courses";
import CoursePage from "./components/CourseDetailPage/CoursePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import Login from "./components/Authentication/Login";
import CheckOutPage from "./components/CheckOut/CheckOutPage";
import SingleCourseDash from "./components/CourseProgress/SingleCourseDash";
import { SignUp } from "./components/Authentication/SignUp";
import AddCoursePage from "./components/AddCourse/AddCoursePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-course" element={<AddCoursePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/course" element={<CoursePage />} />
        {/* <Route path="/course/:id" element={<CoursePage />} /> */}
        <Route exact path="/course-dash" element={<SingleCourseDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

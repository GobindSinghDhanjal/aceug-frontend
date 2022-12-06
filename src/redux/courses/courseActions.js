import { baseURL } from "../../shared/baseUrl";
import { ADDING_COURSE, ENROLL_IN_COURSE } from "./courseTypes";
import axios from "axios";
export const enrollincourse = (courseId) => {
  return {
    type: ENROLL_IN_COURSE,
    payload: {
      courseId: courseId,
    },
  };
};

export const getCourse = (course) => {
  return {
    type: ADDING_COURSE,
    payload: course,
  };
};

export const fetchCourse = (id) => (dispatch) => {
  axios
    .get(baseURL + "COURSES/" + id.toString())
    .then((response) => response.data)
    .then((course) => dispatch(getCourse(course)));
};

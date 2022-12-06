import {
  ADDING_COURSE,
  COURSES_LOADING,
  COURSES_LOADING_FAILURE,
  COURSES_LOADING_SUCCESS,
  ENROLL_IN_COURSE,
} from "./courseTypes";

const initialState = {
  courses: [],
  course: {},
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENROLL_IN_COURSE:
      const indexToUpdate = 0;
      const newCoursesData = [...state.courses];

      newCoursesData[indexToUpdate] = {
        ...newCoursesData[indexToUpdate],
        enrolled: newCoursesData[indexToUpdate].enrolled + 1,
      };

      const newState = { ...state, courses: newCoursesData };
      return newState;

    case COURSES_LOADING:
      return { ...state, courses: action.payload };

    case COURSES_LOADING_SUCCESS:
      return state;

    case COURSES_LOADING_FAILURE:
      return state;

    case ADDING_COURSE:
      return { ...state, course: action.payload };

    default:
      return state;
  }
};

export default courseReducer;

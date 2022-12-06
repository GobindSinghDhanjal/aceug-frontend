import {
  GET_QUESTION_BY_ID,
  LOAD_COURSE_PROGRESS,
  LOAD_CURRENT_RESOURCE,
} from "./cpTypes";

const initialState = {
  currentCourse: {},
  currentResource: {},
  resourceType: "",
  courseProgress: {},
  question: {},
};

const cpReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENT_RESOURCE:
      return {
        ...state,
        currentResource: action.payload.resource,
      };
    case LOAD_COURSE_PROGRESS:
      return {
        ...state,
        courseProgress: action.payload.progress,
      };
    case GET_QUESTION_BY_ID:
      return {
        ...state,
        question: action.payload.question,
      };

    default:
      return state;
  }
};

export default cpReducer;

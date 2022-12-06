import { baseURL } from "../../shared/baseUrl";
import axios from "axios";
import {
  GET_QUESTION_BY_ID,
  LOAD_COURSE_PROGRESS,
  LOAD_CURRENT_RESOURCE,
} from "./cpTypes";

export const loadCurrentResource = (resource) => {
  return {
    type: LOAD_CURRENT_RESOURCE,
    payload: {
      resource: resource,
    },
  };
};

export const loadCourseProgress = (progress) => {
  return {
    type: LOAD_COURSE_PROGRESS,
    payload: {
      progress: progress,
    },
  };
};

export const fetchProgress = (progressId) => (dispatch) => {
  axios
    .get(baseURL + "PROGRESS/" + progressId.toString())
    .then((response) => response.data)
    .then((progress) => dispatch(loadCourseProgress(progress)));
};

export const fetchResource = (resourceId) => (dispatch) => {
  axios
    .get(baseURL + "RESOURCES/" + resourceId.toString())
    .then((response) => response.data)
    .then((resource) => dispatch(loadCurrentResource(resource)));
};

export const fetchQuestion = (questionId) => (dispatch) => {
  axios
    .get(baseURL + "QUESTIONS/" + questionId.toString())
    .then((response) => response.data)
    .then((question) => dispatch(getQuestionById(question)));
};

export const getQuestionById = (question) => {
  return {
    type: GET_QUESTION_BY_ID,
    payload: {
      question: question,
    },
  };
};

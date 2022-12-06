import { createStore, applyMiddleware, combineReducers } from "redux";

import courseReducer from "./courses/courseReducer";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import cpReducer from "./courseprogress/cpReducer";
const middlewares = [reduxThunk];

middlewares.push(logger);

const allReducers = combineReducers({
  courses: courseReducer,
  progress: cpReducer,
});

const store = createStore(allReducers, applyMiddleware(...middlewares));

export default store;

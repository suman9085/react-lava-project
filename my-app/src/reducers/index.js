import counterReducer from "./counterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  mycounter: counterReducer
});

export default rootReducer;
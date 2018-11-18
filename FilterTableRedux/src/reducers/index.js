import { combineReducers } from "redux";
import pregaoReducer from "./pregao";

const rootReducer = combineReducers({
  pregaoState: pregaoReducer
});

export default rootReducer;

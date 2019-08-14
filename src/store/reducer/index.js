import { combineReducers } from "redux";
import homeReducer from "../../containers/Home/reducer";

const rootreducer = combineReducers({
  home: homeReducer
});

export default rootreducer;

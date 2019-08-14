import { createStore, applyMiddleware } from "redux";
import rootreducer from "../reducer";
import thunk from "redux-thunk";

function configureStore() {
  return createStore(rootreducer, applyMiddleware(thunk));
}

export default configureStore;

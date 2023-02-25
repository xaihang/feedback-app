
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./Reducer";

const store = createStore(
    combineReducers({
      reducer
    }),
    applyMiddleware(logger)
  );

  export default store; 
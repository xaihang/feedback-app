
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./Reducer";
import logger from "redux-logger";

const store = createStore(
    combineReducers({
      reducer
    }),
    applyMiddleware(logger)
  );

  export default store; 
  
  //! comments:

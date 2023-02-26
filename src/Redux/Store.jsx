
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./Reducer";
import logger from "redux-logger";

// redux store:
const store = createStore(
      //  used to update the redux store
    combineReducers({
      reducer
    }),
      // logs the actions and state changes in the store to the console
    applyMiddleware(logger)
  );

  export default store; 
  
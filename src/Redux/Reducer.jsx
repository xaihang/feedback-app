// declared a new object called initialState 
// that is used as the initial state of redux store
//  the initial state is an empty object
const initialState = {}


// declared a reducer function that updates the state of the redux store 
// based on the actions dispatched by app
// state parameter represents the current state of the store =  initialState (empty {})
// and action represents the action that was dispatched
const reducer = (state = initialState, action) => {

  // checks if the type property of the action object is equal to "SET_FEEDBACK"
  // this action is dispatched when the user submits feedback
  // if the type property matches "SET_FEEDBACK"
  // the reducer creates a new state object that includes the new feedback data
  // and returns the new state object
    if (action.type === "SET_FEEDBACK") {

        // declares a new object called newState 
        // which is used to store the updated state of the store
      const newState = {
        // uses the spread syntax to create a copy of the state object
        ...state,
        // creates a new property on the newState object
        // updates the value of the feedback property with the current feedback data
        [action.payload.name]: action.payload.value
      }
      // returns the updated newState object.
      return newState
    }
    // checks if the type property of the action object is equal to "GET_FEEDBACK"
    // this action is dispatched when app needs to retrieve the feedback data from the store
    // if the type property matches "GET_FEEDBACK" 
    if (action.type === "GET_FEEDBACK") {
      // the reducer returns the current state of the store
      return state;
    } 
    // checks if the type property of the action object is equal to "CLEAR_FEEDBACK"
    // this action is dispatched when the user resets the feedback form
    if (action.type === "CLEAR_FEEDBACK") {
      // If the type property matches "CLEAR_FEEDBACK", 
      // the reducer returns the initialState object
      //  which resets the store to its original state (empty {}).
      return initialState;
    }
    //  returns the current state object if none of the previous conditions are met
    return state;
  };

  export default reducer; 


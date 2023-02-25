//! feedbacks reducer
const initialState = {}


const reducer = (state = initialState, action) => {
    if (action.type === "SET_FEEDBACK") {
      return action.payload;
    }
    if (action.type === "CLEAR_CUSTOM") {
      state = [];
      return state;
    }
    return state;
  };

  export default reducer; 
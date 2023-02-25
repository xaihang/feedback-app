//! feedbacks reducer
const initialState = [
    // {
    //     feeling: 1,
    //     understanding: 0,
    //     support: 0,
    //     comments: '', 
    //     flagged: false,

    // }
]

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
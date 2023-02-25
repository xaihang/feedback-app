const initialState = {}

const reducer = (state = initialState, action) => {
    if (action.type === "SET_FEEDBACK") {
      const newState = {
        ...state,
        [action.payload.name]: action.payload.value
      }
      return newState
    }
    if (action.type === "GET_FEEDBACK") {
      return state;
    }
    return state;
  };

  export default reducer; 

  //! comments:

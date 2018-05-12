import * as actionTypes from "../actions";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state); // optional approach to spread operator
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      };
  }
  return state;
};

export default counterReducer;
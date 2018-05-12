import * as actionTypes from "../actions";

const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.resultOnStr
        })
        // concat() updates array immutably vs. push() method
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.results.splice(id, 1);
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      // filter() returns a new array immutably
      return {
        ...state,
        results: updatedArray
      };
  }
  return state;
};

export default resultReducer;

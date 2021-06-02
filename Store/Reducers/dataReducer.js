const initialState = { stringsArray: [] };

function dataReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "addElement":
      nextState = {
        ...state,
        stringsArray: [...state.stringsArray, action.value]
      };
      return nextState || state;
    default:
      return state;
  }
}

export default dataReducer;

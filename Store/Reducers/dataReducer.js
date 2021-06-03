import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = { stringsArray: [] };

function dataReducer(state = initialState, action) {
  
  let nextState;
  let stringsArray;
  
  switch (action.type) {

    case "hydrateStoreFromAsyncStorage":
      stringsArray = action.value;
      nextState = {
        ...state,
        stringsArray
      };
      return nextState || state;
    
    case "addElement":
      stringsArray = [...state.stringsArray, action.value];
      nextState = {
        ...state,
        stringsArray
      };
      AsyncStorage.setItem("stringsArray", JSON.stringify(stringsArray));
      return nextState || state;
    
    case "resetElements":
      stringsArray = [];
      nextState = {
        ...state,
        stringsArray
      };
      return nextState || state;

    default:
      return state;
  }
}

export default dataReducer;

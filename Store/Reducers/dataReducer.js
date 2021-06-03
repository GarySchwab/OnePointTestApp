import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * dataReducer.js
 * Ce fichier contient le reducer utilisé pour la gestion des données de la liste.
 * Ce reducer permet :
 *  - d'initialiser la liste avec les données de l'AsyncStorage
 *  - d'ajouter un élément dans la liste
 *  - de réinitialiser la liste de données (y compris les données sauvegardées)
 */

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
      stringsArray = [...state.stringsArray, action.value]; // On ajoute l'élément à ceux déja présents (concaténation)
      nextState = {
        ...state,
        stringsArray
      };
      AsyncStorage.setItem("stringsArray", JSON.stringify(stringsArray)); // On enregistre le nouvel élément dans l'AsyncStorage
      return nextState || state;
    
    case "resetElements":
      stringsArray = [];
      nextState = {
        ...state,
        stringsArray
      };
      AsyncStorage.setItem("stringsArray", JSON.stringify([])); // On supprime les données de l'AsyncStorage
      return nextState || state;

    default:
      return state;
  }
}

export default dataReducer;

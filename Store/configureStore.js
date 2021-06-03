import { createStore } from "redux";
import dataReducer from "./Reducers/dataReducer";

/**
 * configueStore.js
 * Ce fichier permet de créer le store redux utilisé pour gérer le state global de l'application.
 * Il utilise un reducer : la fonction dataReducer.
 */

export default createStore(dataReducer);

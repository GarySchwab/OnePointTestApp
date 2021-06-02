import { createStore } from "redux";
import dataReducer from "./Reducers/dataReducer";

export default createStore(dataReducer);
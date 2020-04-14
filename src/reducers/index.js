import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import store from "./store";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    store,
    // Outros reducers aqui
  });

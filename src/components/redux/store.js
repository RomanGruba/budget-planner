import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import budgetFormReducer from "../redux/budgetFormReducer";

const rootReducer = combineReducers({
  value: budgetFormReducer
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;

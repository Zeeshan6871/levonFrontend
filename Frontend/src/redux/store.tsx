import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { tableReducer } from "./tableData/reducer";

let rootReducer = combineReducers({
  store: tableReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

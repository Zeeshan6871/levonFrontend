import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  StoreEnhancer,
  AnyAction,
  Reducer,
} from "redux";
import { thunk, ThunkDispatch } from "redux-thunk";
import { tableReducer } from "./tableData/reducer";

let rootReducer: Reducer<Partial<{ store: never }>> | any = combineReducers({
  store: tableReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
const enhancer: StoreEnhancer<
  { dispatch: ThunkDispatch<any, undefined, AnyAction> },
  {}
> = applyMiddleware(thunk);
export const store = legacy_createStore(rootReducer, enhancer);

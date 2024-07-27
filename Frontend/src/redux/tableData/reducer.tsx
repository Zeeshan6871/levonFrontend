import {
  GET_TABLE_ERROR,
  GET_TABLE_LOADING,
  GET_TABLE_SUCCESS,
} from "./actionTypes";
import { AppState, AppAction } from "./dataTypes";

const initialState: AppState = {
  total: 0,
  isLoading: false,
  isError: false,
  Table: null,
};

export const tableReducer = (
  state = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case GET_TABLE_LOADING:
      return { ...state, isLoading: true, isError: false };
    case GET_TABLE_ERROR:
      return { ...state, isLoading: false, isError: true };
    case GET_TABLE_SUCCESS:
      //   console.log(action);

      return {
        ...state,
        isLoading: false,
        isError: false,
        Table: action.payload
          ? {
              barData: action.payload.barData,
              lineData: action.payload.lineData,
            }
          : null,
      };
    default:
      return state;
  }
};

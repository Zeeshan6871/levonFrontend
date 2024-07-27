import { Dispatch } from "redux";
import axios from "axios";
import {
  GET_TABLE_ERROR,
  GET_TABLE_LOADING,
  GET_TABLE_SUCCESS,
} from "./actionTypes";
import { TableDataPayload, AppAction, AppThunk } from "./dataTypes";

export const getTableLoadingAction = (): AppAction => {
  return { type: GET_TABLE_LOADING };
};

export const getTableErrorAction = (): AppAction => {
  return { type: GET_TABLE_ERROR };
};

export const getTableSuccessAction = (payload: TableDataPayload): AppAction => {
  //   console.log(payload);

  return {
    type: GET_TABLE_SUCCESS,
    payload,
  };
};

export const getTable = (): AppThunk => (dispatch: Dispatch<AppAction>) => {
  dispatch(getTableLoadingAction());
  return new Promise<void>((resolve, reject) => {
    axios
      .get<TableDataPayload>(`http://localhost:8080/tableData`)
      .then((res) => {
        // console.log(res.data);
        dispatch(getTableSuccessAction(res.data));
        resolve();
      })
      .catch(() => {
        dispatch(getTableErrorAction());
        reject();
      });
  });
};

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  GET_TABLE_ERROR,
  GET_TABLE_LOADING,
  GET_TABLE_SUCCESS,
} from "./actionTypes";
export interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    fill?: boolean;
    borderColor?: string;
    backgroundColor?: string;
    tension?: number;
  }>;
}

export interface TableDataPayload {
  barData: ChartData;
  lineData: ChartData;
}

export interface TableDataAction {
  type: string;
  payload?: TableDataPayload;
}

export interface AppState {
  total: number;
  isLoading: boolean;
  isError: boolean;
  Table: {
    barData: ChartData;
    lineData: ChartData;
  } | null;
}

export interface TableDataPayload {
  barData: ChartData;
  lineData: ChartData;
}

export interface GetTableLoadingAction {
  type: typeof GET_TABLE_LOADING;
}

export interface GetTableErrorAction {
  type: typeof GET_TABLE_ERROR;
}

export interface GetTableSuccessAction {
  type: typeof GET_TABLE_SUCCESS;
  payload: TableDataPayload;
}

export type AppAction =
  | GetTableLoadingAction
  | GetTableErrorAction
  | GetTableSuccessAction;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

import { SearchData } from "./api";

export interface SearchState {
  data: SearchData | null;
  error: boolean;
  loading: boolean;
  query: string;
  page?: number;
}

export interface SearchAction {
  type: SearchTypes;
}

export interface SearchActionRequest extends SearchAction {
  payload: SearchRequestPayload;
}

export interface SearchActionSuccess extends SearchAction {
  payload: SearchDataPayload;
}
export interface SearchActionLoading extends SearchAction {
  payload: SearchLoadingPayload;
}

export enum SearchTypes {
  SEARCH_REQUEST = "SEARCH_REQUEST",
  SEARCH_SUCCESS = "SEARCH_SUCCESS",
  SEARCH_FAILURE = "SEARCH_FAILURE",
  SEARCH_RESET = "SEARCH_RESET",
  UPDATE_LOADING = "UPDATE_LOADING",
}
export interface SearchDataPayload {
  data: SearchData;
}

export interface SearchRequest {
  payload: SearchRequestPayload;
  type: SearchTypes;
}

export interface SearchRequestPayload {
  query?: string;
  isInitial: boolean;
  page?: number;
}
export interface SearchLoadingPayload {
  loading: boolean;
}

export interface SearchSelector {
  search: SearchState;
}

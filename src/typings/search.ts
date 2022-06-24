import { SearchData } from "./api";

export interface SearchState {
  data: SearchData | null;
  error: boolean;
  loading: boolean;
  query?: string;
  page: number;
  isInitial: boolean;
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
export interface SearchActionPaging extends SearchAction {
  payload: SearchPagingPayload;
}

export enum SearchTypes {
  SEARCH_REQUEST = "SEARCH_REQUEST",
  SEARCH_SUCCESS = "SEARCH_SUCCESS",
  SEARCH_FAILURE = "SEARCH_FAILURE",
  SEARCH_RESET = "SEARCH_RESET",
  UPDATE_LOADING = "UPDATE_LOADING",
  UPDATE_PAGE = "UPDATE_PAGE",
  UPDATE_IS_INITIAL = "UPDATE_IS_INITIAL",
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
  page: number;
}
export interface SearchLoadingPayload {
  loading: boolean;
}
export interface SearchPagingPayload {
  page: number;
}

export interface SearchSelector {
  search: SearchState;
}

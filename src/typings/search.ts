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

export enum SearchTypes {
  SEARCH_REQUEST = "SEARCH_REQUEST",
  SEARCH_SUCCESS = "SEARCH_SUCCESS",
  SEARCH_FAILURE = "SEARCH_FAILURE",
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

export interface SearchSelector {
  search: SearchState;
}

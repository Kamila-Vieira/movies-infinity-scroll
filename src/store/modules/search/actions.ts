import {
  SearchDataPayload,
  SearchTypes,
  SearchRequestPayload,
  SearchLoadingPayload,
  SearchPagingPayload,
} from "../../../typings/search";

export function searchRequest(payload: SearchRequestPayload) {
  return {
    type: SearchTypes.SEARCH_REQUEST,
    payload,
  };
}

export function searchSuccess(payload: SearchDataPayload) {
  return {
    type: SearchTypes.SEARCH_SUCCESS,
    payload,
  };
}

export function searchFailure() {
  return {
    type: SearchTypes.SEARCH_FAILURE,
  };
}

export function searchReset() {
  return {
    type: SearchTypes.SEARCH_RESET,
  };
}

export function searchUpdateLoading(payload: SearchLoadingPayload) {
  return {
    type: SearchTypes.UPDATE_LOADING,
    payload,
  };
}

export function searchUpdatePage(payload: SearchPagingPayload) {
  return {
    type: SearchTypes.UPDATE_PAGE,
    payload,
  };
}

import {
  SearchDataPayload,
  SearchTypes,
  SearchRequestPayload,
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

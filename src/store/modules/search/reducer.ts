import type { Reducer } from "redux";
import {
  SearchAction,
  SearchActionRequest,
  SearchActionSuccess,
  SearchState,
  SearchTypes,
} from "../../../typings/search";

const DEFAULT_STATE: SearchState = {
  data: null,
  error: false,
  loading: false,
  query: "",
  page: 1,
};

const reducer: Reducer<SearchState, SearchAction> = (
  state = DEFAULT_STATE,
  action
) => {
  switch (action.type) {
    case SearchTypes.SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        query: (action as SearchActionRequest).payload?.query || "",
        page: (action as SearchActionRequest).payload?.page,
      };
    case SearchTypes.SEARCH_FAILURE:
      return { ...state, loading: false, error: true, data: null };
    case SearchTypes.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: (action as SearchActionSuccess).payload.data,
      };
    default:
      return state;
  }
};

export default reducer;

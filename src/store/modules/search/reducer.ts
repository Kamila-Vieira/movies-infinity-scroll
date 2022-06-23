import type { Reducer } from "redux";
import {
  SearchAction,
  SearchActionLoading,
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
        query: (action as SearchActionRequest).payload?.query || state.query,
        page: (action as SearchActionRequest).payload?.page,
      };
    case SearchTypes.SEARCH_FAILURE:
      return { ...DEFAULT_STATE, loading: false, error: true, data: null };
    case SearchTypes.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: (action as SearchActionSuccess).payload.data,
      };
    case SearchTypes.SEARCH_RESET:
      return { ...DEFAULT_STATE };
    case SearchTypes.UPDATE_LOADING:
      return {
        ...DEFAULT_STATE,
        loading: (action as SearchActionLoading).payload.loading,
      };
    default:
      return state;
  }
};

export default reducer;

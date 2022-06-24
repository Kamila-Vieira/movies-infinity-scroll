import type { Reducer } from "redux";
import {
  SearchAction,
  SearchActionLoading,
  SearchActionPaging,
  SearchActionRequest,
  SearchActionSuccess,
  SearchState,
  SearchTypes,
} from "../../../typings/search";

const DEFAULT_STATE: SearchState = {
  data: null,
  error: false,
  loading: false,
  page: 1,
  isInitial: false,
};

const reducer: Reducer<SearchState, SearchAction> = (
  state = DEFAULT_STATE,
  action
) => {
  switch (action.type) {
    case SearchTypes.SEARCH_REQUEST:
      const newState = {
        ...state,
        loading: true,
        isInitial: (action as SearchActionRequest).payload.isInitial,
        page: (action as SearchActionRequest).payload.page,
      };

      if (
        (action as SearchActionRequest).payload?.query &&
        !(action as SearchActionRequest).payload.isInitial
      ) {
        newState.query = (action as SearchActionRequest).payload?.query;
      }

      return { ...newState };
    case SearchTypes.SEARCH_FAILURE:
      return { ...DEFAULT_STATE, loading: false, error: true, data: null };
    case SearchTypes.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: (action as SearchActionSuccess).payload.data,
      };
    case SearchTypes.UPDATE_LOADING:
      return {
        ...state,
        loading: (action as SearchActionLoading).payload.loading,
      };
    case SearchTypes.UPDATE_PAGE:
      return {
        ...state,
        page: (action as SearchActionPaging).payload.page,
      };
    case SearchTypes.SEARCH_RESET:
      return { ...DEFAULT_STATE };
    default:
      return state;
  }
};

export default reducer;

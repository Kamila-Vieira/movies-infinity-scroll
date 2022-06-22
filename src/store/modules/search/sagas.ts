import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { API_KEY, API_LANGUAGE } from "../../../constants";
import {
  SearchDataPayload,
  SearchRequest,
  SearchTypes,
} from "../../../typings/search";
import { searchSuccess, searchFailure } from "./actions";

function* searchRequest({ payload }: SearchRequest) {
  try {
    if (payload.isInitial) {
      const { data }: SearchDataPayload = yield call(
        api.get,
        `/movie/popular?api_key=${API_KEY}&language=${API_LANGUAGE}&page=${payload.page}`
      );
      yield put(searchSuccess({ data }));
      if (api.defaults.headers.hasOwnProperty("Authorization")) {
        (api.defaults.headers as any).Authorization = API_KEY
          ? `Bearer ${API_KEY}`
          : "";
      }
    } else {
      const { data }: SearchDataPayload = yield call(
        api.get,
        `/search/movie?language=${API_LANGUAGE}&query=${payload?.query}&page=${payload.page}`
      );
      yield put(searchSuccess({ data }));
    }
  } catch (err) {
    yield put(searchFailure());
  }
}

export default all([takeLatest(SearchTypes.SEARCH_REQUEST, searchRequest)]);

import { all } from "redux-saga/effects";

import search from "./search/sagas";

export default function* rootSaga(): Generator<any, void, void> {
  return yield all([search]);
}

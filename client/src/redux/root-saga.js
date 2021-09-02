import { call } from "redux-saga/effects";

import expensesSaga from "./expenses/sagas";

export default function* root() {
  yield call(expensesSaga);
}

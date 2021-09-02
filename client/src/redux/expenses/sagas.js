import { call, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { setExpenses } from "../expenses/reducer";

function* onSetExpenses() {
  yield call(toast.info, "Set expenses dispatched!");
}

function* listenActions() {
  yield takeLatest(setExpenses, onSetExpenses);
}

function* expensesSaga() {
  yield call(listenActions);
}

export default expensesSaga;

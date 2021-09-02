import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/reducer";
import expensesReducer from "./expenses/reducer";
import filtersReducer from "./filters/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  expenses: expensesReducer,
  filters: filtersReducer,
});

export default rootReducer;

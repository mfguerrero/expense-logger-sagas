import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

const initialState = {
  match: "",
  startDate: DateTime.now().startOf("month"),
  endDate: DateTime.now().endOf("month"),
  orderBy: "date",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setMatch(state, action) {
      state.match = action.payload;
    },
    setOrder(state, action) {
      state.orderBy = action.payload;
    },
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setEndDate(state, action) {
      state.endDate = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { setMatch, setOrder, setStartDate, setEndDate } = filtersSlice.actions;

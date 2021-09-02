import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DateTime } from "luxon";
import { TextField, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import Container from "../layout/container";
import { useStyles } from "./filters.style";

import { setMatch, setOrder, setStartDate, setEndDate } from "../../redux/filters/reducer";

const Filters = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const match = useSelector((state) => state.filters.match);
  const startDate = useSelector((state) => state.filters.startDate);
  const endDate = useSelector((state) => state.filters.endDate);
  const orderBy = useSelector((state) => state.filters.orderBy);

  const searchChangeHandler = (event) => {
    dispatch(setMatch(event.target.value));
  };

  const startDateChangeHandler = (event) => {
    const { value } = event.target;
    if (value && value.trim()) dispatch(setStartDate(DateTime.fromISO(value)));
  };

  const endDateChangeHandler = (event) => {
    const { value } = event.target;
    if (value && value.trim()) dispatch(setEndDate(DateTime.fromISO(value)));
  };

  const orderChangeHandler = (event) => {
    dispatch(setOrder(event.target.value));
  };

  return (
    <div>
      <Container>
        <div className={classes.group}>
          <div className={classes.groupItem}>
            <TextField
              placeholder="Search expenses"
              variant="outlined"
              className={classes.inputField}
              label="search"
              value={match}
              onChange={searchChangeHandler}
            />
          </div>
          <div className={classes.groupItem}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">order by</InputLabel>
              <Select
                variant="outlined"
                className={classes.inputField}
                label="order by"
                value={orderBy}
                onChange={orderChangeHandler}
              >
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="amount">Amount</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.groupItem}>
            <TextField
              id="start-date"
              variant="outlined"
              label="from"
              type="date"
              value={startDate.toISODate()}
              onChange={startDateChangeHandler}
              className={classes.inputField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.groupItem}>
            <TextField
              id="end-date"
              variant="outlined"
              label="to"
              type="date"
              value={endDate.toISODate()}
              onChange={endDateChangeHandler}
              className={classes.inputField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Filters;

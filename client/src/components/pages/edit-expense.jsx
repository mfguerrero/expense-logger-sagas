import React from "react";
import Container from "../layout/container";
import Header from "../layout/header";
import ExpenseForm from "../expense-form/expense-form";
import { useStyles } from "./edit-expense.style";

const EditExpense = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.header}>
        <Container>
          <h1>Edit Expense</h1>
        </Container>
      </div>
      <Container>
        <ExpenseForm id={1} />
      </Container>
    </div>
  );
};

export default EditExpense;

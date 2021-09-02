import React from "react";
import Container from "../layout/container";
import Header from "../layout/header";
import ExpenseForm from "../expense-form/expense-form";
import { useStyles } from "./add-expense.style";

const AddExpense = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.header}>
        <Container>
          <h1>Add Expense</h1>
        </Container>
      </div>
      <Container>
        <ExpenseForm />
      </Container>
    </div>
  );
};

export default AddExpense;

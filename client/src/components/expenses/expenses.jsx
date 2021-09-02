import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useStyles } from "./expenses.style";
import Container from "../layout/container";
import Expense from "../expense/expense";
import { visibleExpenses } from "../../redux/expenses/selectors";
import { setExpenses } from "../../redux/expenses/reducer";

const Expenses = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const expenses = useSelector(visibleExpenses);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch("api/expenses", {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        });
        const { success, data, message } = await response.json();
        if (success) {
          dispatch(setExpenses(data));
        } else {
          let msg = "";
          if (Array.isArray(message)) msg = message.map((m) => m.msg).toString();
          else msg = message;
          toast.error(msg);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchExpenses();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Container>
        <div className={classes.list}>
          <div className={classes.header}>
            <div>Expense</div>
            <div>Amount</div>
          </div>
          <div className={classes.body}>
            {expenses.length === 0 ? (
              <div className={classes.noitems}>
                <span>No Expenses</span>
              </div>
            ) : (
              expenses.map((expense) => {
                return <Expense key={expense.id} {...expense} />;
              })
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Expenses;

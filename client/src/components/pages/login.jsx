/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import fetch from "isomorphic-fetch";
import { toast } from "react-toastify";
import { TextField, Button } from "@material-ui/core";
import { useStyles } from "./login.style";

import { setToken } from "../../redux/auth/reducer";

export const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("api/auth/login", {
        method: "post",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { success, data, message } = await response.json();
      if (success) {
        dispatch(setToken(data.token));
        history.push("/dashboard");
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

  return (
    <div className={classes.layout}>
      <div className={classes.box}>
        <h1 className={classes.title}>Expense Logger</h1>
        <p className={classes.subTitle}>It's time to get your expenses under control.</p>
        <TextField
          name="email"
          placeholder="email"
          value={credentials.mail}
          type="email"
          className={classes.textField}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          type="password"
          name="password"
          value={credentials.password}
          placeholder="Password"
          className={classes.textField}
          variant="outlined"
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" disableElevation onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;

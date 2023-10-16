import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Redux/AllSlice/AuthSlice";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import {
  CustomForm,
  TextWithLink,
} from "./commonComponents";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputState, setInput] = useState({
    username: "",
    password: "",
  });
  const changeHandler = (event) => {
    event.persist();
    const { name, value } = event.target;
    setInput({ ...inputState, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(userLogin({ inputState, navigate }));
  };

  return (
    <CustomForm>
      <TextField
        type="text"
        name="username"
        label="Username"
        placeholder="username"
        onChange={changeHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AlternateEmailIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        type="password"
        name="password"
        label="password"
        placeholder="Password"
        onChange={changeHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        value="Login"
        variant="outlined"
        onClick={submitHandler}
      >
        Log In
      </Button>
      <TextWithLink>
        Don't have an account?{" "}
        <NavLink as="a" to="/registration">
          Create an Account
        </NavLink>
      </TextWithLink>
    </CustomForm>
  );
};

export default LogIn;

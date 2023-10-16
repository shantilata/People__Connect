import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingComponent from "../LoadingComponent";

const Landing = () => {
  const { isAuthenticating, isAuthenticated } = useSelector(state => state.auth)
  if (isAuthenticating) {
    return <LoadingComponent />;
  }
  if (isAuthenticated) {
    return <Navigate to="/feed" />;
  } else {
    return <Navigate to="/log-in" />;
  }
};

export default Landing;

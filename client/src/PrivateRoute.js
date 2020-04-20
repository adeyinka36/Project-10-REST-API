import React from "react";
import { Route } from "react-router-dom";
import Auth from "./Auth";
import Forbidden from "./Forbidden";

const PrivateRoute = ({ component, ...options }) => {
  const user = Auth.getAuth();
  // sessionStorage stores isAuthenticated as a String , use "true" insteaad of true
  // add the quotation marks around true
  const LastComponent = user === "true" ? component : Forbidden;
  return <Route {...options} component={LastComponent} />;
};

export default PrivateRoute;

import React from 'react';
import { Router, Navigate } from "react-router-dom";
import { isAuthenticated } from "./index";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Router
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }} replace
          />
        )
      }
    />
  );
}

export default PrivateRoute

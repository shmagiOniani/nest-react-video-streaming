import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  permission,
  ...rest
}) {
  const token = localStorage.getItem("token");

  return (
    <>
        <Route
          {...rest}
          render={(props) => token !== null && <Component {...props} />}
        >
          {token === null && <Redirect to="/login" />}
        </Route>
    </>
  );
}

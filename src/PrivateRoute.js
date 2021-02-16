import React from "react";
import { Redirect, Route } from "react-router-dom";

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
export default function PrivateRoute({ children, ...rest }) {
  fakeAuth.isAuthenticated = localStorage.getItem("loggedIn")==="true" ? true : false;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/page",
                state: { from: location }
              }}
            />
          )
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

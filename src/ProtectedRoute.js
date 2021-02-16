import React from 'react';
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

function ProtectedRoute({...rest }) {
    fakeAuth.isAuthenticated = localStorage.getItem("loggedIn")==="true" ? true : false;
    return (
      <Route
        {...rest}
        render={props =>
          fakeAuth.isAuthenticated ? (
            <Redirect
            to={{
              pathname: "/page/fya",
              state: { from: props.location }
            }}
          />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

    export default ProtectedRoute;
  
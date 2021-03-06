import React, { Fragment, useState, useEffect } from "react";

import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const axios = require("axios");

toast.configure();

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await axios.get("https://register-login-page.herokuapp.com/auth/is-verify", {
        headers: {
          'token': localStorage.token,
        },
      });

      const parseRes = response.data
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  });

  return (
    <Fragment>
        <div>
          <Switch>
            <Route
              exact
              path="/login"
              render={(props) =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={(props) =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/dashboard"
              render={(props) =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
    </Fragment>
  );
}

export default App;

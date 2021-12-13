import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, onAuthStateChanged } from "../configs/firebase";

import Login from "../components/authentication/login";
import Register from "../components/authentication/register";
import Home from "../components/authentication/home";
import DataSaving from "../components/data_saving";
import Task from "../components/task";

const AppRoutes = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user.email, "---> Current Active User");
      } else {
        alert("No active user found!");
      }
    });
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route  path="/login" component={Login} />
          <Route exact path="/" component={Register} />
          <Route  path="/home" component={Home} />
          <Route  path="/data" component={DataSaving} />
          <Route  path="/task" component={Task} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRoutes;

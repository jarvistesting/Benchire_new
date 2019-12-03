import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import adminPage from "./page/adminPage";
import userPage from "./page/userPage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Layout} />
    <Route path="/admin" component={adminPage} />
    <Route path="/user" component={userPage} />
  </Switch>
);

export default Router;

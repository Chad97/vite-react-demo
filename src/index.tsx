import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Layout from "./Layout/Layout";

import App from "~/views/App";
import Home from "~/views/Home";

interface Props {}

const Index: React.FC<Props> = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/app">
            <App />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Index;

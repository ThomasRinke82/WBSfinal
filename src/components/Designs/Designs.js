import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Content from "../Content/Content";
import Background from "../Background/Background";
import Layout from "../Layout/Layout";

import "./Designs.css";

const Designs = () => {
  return (
    <div>
      <Router>
        <div>
          <ul className="DesignsNavbar">
            <li>
              <Link to="/designs/background">Background</Link>
            </li>
            <li>
              <Link to="/designs/layout">Layout</Link>
            </li>
            <li>
              <Link to="/designs/content">Content</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/designs/layout">
              <Layout />
            </Route>
            <Route path="/designs/background">
              <Background />
            </Route>
            <Route path="/designs/content">
              <Content />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Designs;

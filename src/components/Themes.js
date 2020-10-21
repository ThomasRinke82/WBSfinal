import React from "react";
import Styles from "./Themes.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PlayerProfile from "./Themes/PlayerProfile";
import Preview from "./Themes/Preview";
import Quote from "./Themes/Quote";
import Result from "./Themes/Result";

function Themes() {
  return (
    <div>
      <Router>
        <div>
          <ul className="ThemesNavbar">
            <li>
              <Link to="/themes/result">Result themes</Link>
            </li>
            <li>
              <Link to="/themes/quote">Quote themes</Link>
            </li>
            <li>
              <Link to="/themes/preview">Preview themes</Link>
            </li>
            <li>
              <Link to="/themes/playerprofile">PlayerProfile themes</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/themes/playerprofile">
              <PlayerProfile />
            </Route>
            <Route path="/themes/preview">
              <Preview />
            </Route>
            <Route path="/themes/quote">
              <Quote />
            </Route>
            <Route path="/themes/result">
              <Result />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Themes;

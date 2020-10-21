import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Themes from "./components/Themes";
import UserSelection from "./components/UserSelection";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/themes">Pick a theme</Link>
            </li>
            <li>
              <Link to="/user_selection">My Selection</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/user_selection">
              <UserSelection />
            </Route>
            <Route path="/themes">
              <Themes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

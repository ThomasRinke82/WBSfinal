import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Designs from "./components/Designs";
import UserSelection from "./components/UserSelection";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <ul className="navbar">
            <li>
              <Link to="/designs">Create Awesome Designs</Link>
            </li>
            <li>
              <Link to="/user_selection">My Selection</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/user_selection">
              <UserSelection />
            </Route>
            <Route path="/designs">
              <Designs />
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

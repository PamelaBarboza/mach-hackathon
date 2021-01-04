import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Bot from "./components/bot/Bot";
import Buttons from "./components/buttons/Buttons";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/bla" className="btn btn-dark">
            Bla bla bla
          </Link>
          <NavLink
            to="/users"
            className="btn btn-dark"
            activeClassName="active"
          ></NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Bot />
          </Route>
          <Route path="/bla">
            <Buttons />
          </Route>
          <Route path="/users/:id" exact>
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

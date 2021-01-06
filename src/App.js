import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
/*   Link ,
 NavLink,  */
} from "react-router-dom";

/* import Bot from "./components/bot/Bot"; */
/* import Buttons from "./components/buttons/Buttons"; */
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Wins from "./components/win/Wins";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" exact>
            <Header />
            <Home />
          </Route>

          <Route path="/win">
            <Wins />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

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

import Home from "./components/home/Home";
import Wins from "./components/win/Wins";
import HomeGoals from "./components/homeGoals/HomeGoals";
import Bot1 from "./components/bot/Bot1";
import Bot2 from "./components/bot/Bot2";
import Bot3 from "./components/bot/Bot3";
import Header from "./components/header/Header";
import BenefitsDetail from "./components/benefitsDetail/BenefitsDetail";
import Benefits from "./components/benefits/Benefits";
import HeaderTwo from "./components/headerTwo/HeaderTwo";
import Watch from "./watch/Watch";
import Missions from "./components/missions/Missions";
import Achievements from "./components/achievements/Achievements";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Bot1 />
          </Route>
          <Route path="/bot2" exact>
            <Bot2 />
          </Route>
          <Route path="/bot3" exact>
            <Bot3 />
          </Route>
          <Route path="/home" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/win" exact>
            <Wins />
          </Route>
          <Route path="/homeGoals" exact>
            <HomeGoals />
          </Route>
          <Route path="/headerTwo" exact>
            <Watch />
            <HeaderTwo />
          </Route>
          <Route path="/benefitsDetail" exact>
            <BenefitsDetail />
          </Route>
          <Route path="/benefits" exact>
            <Benefits />
          </Route>
          <Route path="/home" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/missions" exact>
            <Missions />
          </Route>
          <Route path="/achievements" exact>
            <Achievements />
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

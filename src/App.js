import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Home from "./components/home/Home";
import Wins from "./components/win/Wins";
import HomeGoals from "./components/homeGoals/HomeGoals";
import Bot1 from "./components/bot/Bot1";
import Bot2 from "./components/bot/Bot2";
import Bot3 from "./components/bot/Bot3";
import Header from "./components/header/Header";
import Benefits from "./components/benefits/Benefits";
import HeaderTwo from "./components/headerTwo/HeaderTwo";
import SumaryGoals from "./components/summaryGoals/SumaryGoals";
import MessageSuccess from "./components/messageSuccess/MessageSuccess";
import Time from "./components/time/Time";
import Goals from "./components/goals/Goals";
import Missions from "./components/missions/Missions";
import Achievements from "./components/achievements/Achievements";
import BenefitMovistar from "./components/benefits/BenefitMovistar";
import NextMission from "./components/nextMission/NextMission";
import AchievementsAdd from "./components/achievementsAdd/AchievementsAdd";

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
          <Route path="/goals" exact>
            <HeaderTwo />
            <Goals />
          </Route>
          <Route path="/time" exact>
            <HeaderTwo />
            <Time />
          </Route>
          <Route path="/sumaryGoals" exact>
            <HeaderTwo />
            <SumaryGoals />
          </Route>
          <Route path="/messageSuccess" exact>
            <HeaderTwo />
            <MessageSuccess />
          </Route>
          <Route path="/benefitsDetail" exact>
            <BenefitMovistar />
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
          <Route path="/nextMission" exact>
            <NextMission />
          </Route>
          <Route path="/achievementsAdd" exact>
            <AchievementsAdd />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

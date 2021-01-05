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
        <div>
          {/*                     <Link to="/" className="btn btn-dark">
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
                    <Link to="/home">
            
          </Link>  */}
        </div>
        <Switch>
          {/*             <Route path="/" exact>
           <Bot /> 
          </Route>
                    <Route path="/bla">
            <Buttons />
          </Route> */}
          {/*   <Route path="/header"></Route> */}
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

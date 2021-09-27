import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "../App";
import BarNavigation from "../components/BarNavigation";
import Artists from "../pages/Artists";
import Albums from "../pages/Albums";
import Songs from "../pages/Songs";
import Seasons from "./../pages/Seasons";
import Metal from "../pages/Metal";
import Rock from "../pages/Rock";
import Balads from "../pages/Balads";
import Dance from "./../pages/Dance";

const AppRouter = () => {
  return (
    <Router>
      <div className="App">
        <BarNavigation />

        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/seasons" exact>
            <Seasons />
          </Route>
          <Route path="/songs" exact>
            <Songs />
          </Route>
          <Route path="/albums" exact>
            <Albums />
          </Route>
          <Route path="/artists" exact>
            <Artists />
          </Route>
          <Route path="/metal" exact>
            <Metal />
          </Route>
          <Route path="/rock" exact>
            <Rock />
          </Route>
          <Route path="/balads" exact>
            <Balads />
          </Route>
          <Route path="/dance" exact>
            <Dance />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

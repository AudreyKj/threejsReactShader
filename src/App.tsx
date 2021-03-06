import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import RoundGrad from "./RoundGrad";
import GradMouv from "./GradMouv";
import AnimForward from "./AnimForward";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/roundgrad">
          <RoundGrad />
        </Route>
        <Route path="/gradmouv">
          <GradMouv />
        </Route>
        <Route path="/panorama">
          <AnimForward />
        </Route>
      </Switch>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
      >
        <Link to="/roundgrad"> RoundGrad </Link>
        <Link to="/gradmouv"> GradMouv </Link>
        <Link to="/panorama"> PanoramaScene </Link>
      </div>
    </>
  );
}

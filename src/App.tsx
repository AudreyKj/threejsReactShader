import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import RoundGrad from "./RoundGrad";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/roundgrad">
          <RoundGrad />
        </Route>
      </Switch>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Link to="/roundgrad"> RoundGrad </Link>
      </div>
    </>
  );
}

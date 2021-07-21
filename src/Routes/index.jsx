import { useContext, useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login"/>
    </Switch>
  )
}
export default Routes;

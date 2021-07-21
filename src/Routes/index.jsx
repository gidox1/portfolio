import { useContext, useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import IndexPage from '../Pages'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={IndexPage}/>
      <Redirect to="/" />
    </Switch>
  )
}
export default Routes;

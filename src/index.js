import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin.js";
import LandingLayout from "layouts/Landing.js";
import AuthLayout from "layouts/Auth.js";
import RTLLayout from "layouts/RTL.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={`/caw`} component={AdminLayout} />
      <Route path={`/landing`} component={LandingLayout} />
      <Redirect from={`/`} to="/landing" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

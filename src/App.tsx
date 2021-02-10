import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetBusId from "./pages/GetBusId";
import GetCityId from "./pages/GetCityId";
import GetDegreeId from "./pages/GetDegreeId";
import GetHealthId from "./pages/GetHealthId";
import GetInsuranceId from "./pages/GetInsuranceId";
import GetJobId from "./pages/GetJobId";
import Homepage from "./pages/Homepage";
import SeeYou from "./pages/SeeYou";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/seeyou" component={SeeYou} />
        <Route exact path="/cityid" component={GetCityId} />
        <Route exact path="/degreeid" component={GetDegreeId} />
        <Route exact path="/jobid" component={GetJobId} />
        <Route exact path="/busid" component={GetBusId} />
        <Route exact path="/insuranceid" component={GetInsuranceId} />
        <Route exact path="/healthid" component={GetHealthId} />
      </Switch>
    </Router>
  );
}

export default App;

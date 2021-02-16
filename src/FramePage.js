import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import FYA from "./fya";
  import Login from "./login";
  import Dashboard from "./dashboard";

const FramePage=()=>{
return(<React.Fragment>
    <Router>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/page/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/page/fya">
                    <FYA/>
                </Route>
            </Router>
</React.Fragment>)
}

export default FramePage;
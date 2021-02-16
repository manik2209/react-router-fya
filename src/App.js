import React,{useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory 
  } from "react-router-dom";

  import FramePage from "./FramePage"
  import PrivateRoute from "./PrivateRoute";
  import ProtectedRoute from "./ProtectedRoute";
  import Login from "./login";


const App=()=>{
    if (window.location.href.includes("page/fya")) {
        localStorage.setItem("navigateToFya","true");
      }
    let history=useHistory();
    // if(localStorage.getItem("loggedIn")==="true")
    // {
    //     history.goBack;
    // }
//     useEffect(()=>{
        
//         //history.replace(history.location.pathname,history.location.state);
//         history.push('/page/fya')
    
// },[localStorage.getItem("loggedIn")==="true"])
    if (!localStorage.getItem("loggedIn") || localStorage.getItem("loggedIn")==="false") {
        return <Login />;
      }
    
   

    return(
        <React.Fragment>
            <Router>
    <Switch>
   
    
      <PrivateRoute exact path="/" />
      <PrivateRoute path="/page">
        <FramePage />
      </PrivateRoute>
    </Switch>
    </Router>
        </React.Fragment>

    )

}

export default App;
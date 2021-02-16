import React from "react";


const Dashboard =()=>{
   const logout=()=>{
            localStorage.setItem("loggedIn","false")
            window.location.href="/login"
    }
    
return(<div>dashboard
    <button onClick={logout}>Logout</button>
</div>)
}

export default Dashboard;


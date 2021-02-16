import React from "react";

const FYA=()=>{
    localStorage.setItem("navigateToFya","false");
    const logout=()=>{
        localStorage.setItem("loggedIn","false")
        window.location.href="/login"
}
return (<div>fya
    <button onClick={logout}>Logout</button>
</div>)
}

export default FYA;
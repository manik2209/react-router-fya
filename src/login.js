import React from 'react';

const Login=()=>{
    
    const login =()=>{
        
        localStorage.setItem("loggedIn","true")
        if(
            localStorage.getItem("navigateToFya") && 
            localStorage.getItem("navigateToFya") ==="true"
        )
        {
            window.location.href="/page/fya"
        }
        else{
            window.location.href="/page/dashboard"
        }
        
        
        
        
}

return(
  <div><button onClick={login}>LOGIN</button>  </div>
)

}

 export  default Login;
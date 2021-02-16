import React from 'react';

const Login=()=>{
    
    const login =()=>{
        
        localStorage.setItem("loggedIn","true")
        window.location.href="/page/dashboard"
        
        
        
}

return(
  <div><button onClick={login}>LOGIN</button>  </div>
)

}

 export  default Login;
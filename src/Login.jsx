import { useState } from "react";
import Register from "./Register";
import Success from "./Success";
import Alert from "./Alert";
import Profile from "./Profile";

function Login({isVisible, loginName, loginPassword, loginEmail, loginMe}){
    const [inputName, setInputName] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [isLoginSuccess, setIsLoginSuccess] = useState(false); 
    const [successType, setSuccessType] = useState(""); 
    const [isError, setIsError] = useState(false); 

    // Whether logged in to the system
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    // Whether back to register page
    const [isBack, setIsBack] = useState(false);

    if(!isVisible && !isBack && !isLoggedIn){
        return (
            <>
            <Alert isError={isError} type={null} error={null}/>
            <form onSubmit={login}>
                <div id="login">
                <h1>Log In</h1>
                <div className="fieldDiv">
                    <label htmlFor="loginName" className="fieldLabel"><b>Username</b></label><br/>
                    <input value={inputName} onChange={(e)=>setInputName(e.target.value)} type="text" placeholder="Enter Username"  name="loginName" id="loginName" className="field"></input><br/>
                 </div>
                <br/>
                <div className="fieldDiv">
                    <label htmlFor="loginPsw" className="fieldLabel"><b>Password</b></label><br/>
                    <input value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)} type="password" placeholder="Enter Password" name="loginPsw" id="loginPsw" className="field"></input><br/>
                </div>
                 <button type="submit">Log In</button>
                 <p id="backButton" onClick={backToRegister}>Back to register</p>

                 </div>

            </form>
            </>
        );
    }

    else if(isBack){
        return (
            <Register/>
        );
    }

    else{
        return(
            <>
            <Success isSuccess={isLoginSuccess} type={successType}/>
            <Profile username={loginName} password={loginPassword} email={loginEmail} aboutme={loginMe}/>
            </>
        );
    }

    function login(){
        // to prevent browser reload/refresh
        event.preventDefault();

        if(inputName===loginName && inputPassword===loginPassword){
            console.log(22);
            
            setIsLoginSuccess(true);
            setSuccessType("login");
            setIsError(false);

            setIsLoggedIn(true);
        }

        else{
            setIsError(true);
        }


     

    }

    function backToRegister(){
        setIsBack(true)
    }
}

export default Login
import { useState } from "react";
import Login from './Login'
import Alert from './Alert'
import Success from './Success'

function Register(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Initial visibility of register page
    const [isVisible, setIsVisible] = useState(true);
     
    const [isError, setIsError] = useState(false); 
    const [errorType, setErrorType] = useState(""); 
    const [error, setError] = useState(""); 

    const [isRegisterSuccess, setIsRegisterSuccess] = useState(false); 
    const [successType, setSuccessType] = useState(""); 

    if(isVisible){
        return(
            <>
            <Alert isError={isError} type={errorType} error={error}/>
            <form onSubmit={submitForm}>
            <div id="container">
            <h1>Register</h1>
            <div className="fieldDiv">
                <label htmlFor="registerName" className="fieldLabel"><b>Username</b></label><br/>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Username"  name="registerName" id="registerName" className="field" required></input><br/>
            </div>
            <br/>
            <div className="fieldDiv">
                <label htmlFor="registerEmail" className="fieldLabel"><b>Email</b></label><br/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="Email" name="registerEmail" id="registerEmail" className="field" required></input>
            </div>
            <br/>
            <div className="fieldDiv">
                <label htmlFor="registerPsw" className="fieldLabel"><b>Password</b></label><br/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Enter Password" name="registerPsw" id="registerPsw" className="field" required></input><br/>
            </div>
           
            <button type="submit" >Register</button>

            </div>

            </form>
            </>
         );
     }
    else{
        return(
            <>
            <Success isSuccess={isRegisterSuccess} type={successType}/>

            <Login isVisible={isVisible} loginName={name} loginPassword={password} loginEmail={email} loginMe={""}/>
            </>
        )
     }

    function submitForm(){
        event.preventDefault();

        if(name.length<4){
            setIsError(true);
            setErrorType("name");
            setError(name);
        }

        else if(!isValidEmail(email)){
            setIsError(true);
            setErrorType("email");
            setError(email);
        }

        else if(password.length<8){
            setIsError(true);
            setErrorType("password");
            setError(password);
        }

        else{
            setIsRegisterSuccess(true);
            setSuccessType("register");
            setIsVisible(false);
        }
        
    }
 
    function isValidEmail(email) {
        // Define a regular expression pattern for email validation.
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
      }


}

export default Register
function Alert({isError, type, error}){
    if(isError){
        if(type=="name"){
            return(
                <div id="alertBox">
                    <p>
                        Username {error} is less than 4 characters
                    </p>


                </div>
            );
        }
        else if(type=="email"){
            return(
                <div id="alertBox">
                    <p>
                        {error} is invalid
                    </p>


                </div>
            );
        }
        else if(type=="password"){
            return(
                <div id="alertBox">
                    <p>
                        Password {error} is less than 8 characters
                    </p>


                </div>
            );
        }
        else{
            return(
                <div id="alertBox">
                    <p>
                        Username/Password is incorrect
                    </p>


                </div>
            );
        }
    }
}

export default Alert
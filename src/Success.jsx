import { useState,useEffect } from "react";

function Success({isSuccess,type}){
    const [isVisible, setIsVisible] = useState(true);

    // timer for success message to disappear
    useEffect(() => {
        setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      });

    if(isSuccess && isVisible){
        if(type=="register"){
        return(
            <div id="successBox">
                <p>
                    Successfully register
                </p>


                </div>
            );
        }
        else if(type=="login"){
           return(
                <div id="successBox">
                    <p>
                         Successfully login 
                    </p>
        
        
                 </div>
                );
            
        }
    }
    
    
    
}

export default Success
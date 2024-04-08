import profile from './assets/kucoin.png'
import { useState } from 'react';
import Login from './Login';

function Profile({username, password, email, aboutme}){
    
    const [isLogOut, setIsLogOut] = useState(false);

    // Whether "about me" is being edited
    const [isEditing, setIsEditing] = useState(false);

    // Whether "about me" is saved
    const [isSaved, setIsSaved] = useState(false);

    const [content, setContent] = useState("");

    const [aboutMe, setAboutMe] = useState(aboutme);


    if(!isLogOut){
        if(isEditing){
            return(
                <div id="profile">
                    <img src={profile} className="logo" alt="Profile Image" /> <button id="logout"onClick={logout}>Log Out</button><br/>
                        Name: {username}<br/><br/>
                        Email: {email}<br/><br/>
                        About Me:
                        <textarea value={aboutMe+content} onChange={(e)=>{setContent(e.target.value);
                        setAboutMe(""); setIsSaved(false)}} id="about-me" rows="5" cols="50"></textarea><br/>
                        <button id="save"onClick={save}>Save Profile</button>
                

                </div>
            );
        }
        else{
            return(
                <div id="profile">
                    <img src={profile} className="logo" alt="Profile Image" /> <button id="logout"onClick={logout}>Log Out</button><br/>
                        Name: {username}<br/><br/>
                        Email: {email}<br/><br/>
                        About Me:
                        <div>
                            <p id="content">
                                {aboutMe+content}
                            </p>
                            <button id="edit"onClick={edit}>Edit Profile</button>
                        </div>
                </div>
            );
        }
    }
    else{
        return(
            <Login isVisible={false} loginName={username} loginPassword={password} loginEmail={email} loginMe={isSaved?aboutMe+content:aboutme}/>
        );
    }

    function logout(){
        setIsLogOut(true)
    }

    function edit(){
        setIsEditing(true);
    }

    function save(){
        setIsEditing(false)
        setIsSaved(true)
    }

}

export default Profile
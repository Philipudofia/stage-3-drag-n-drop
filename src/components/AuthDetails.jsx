import React, { useEffect, useState } from "react";
import { auth } from "../Firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import './AuthDetail.css'

export default function AuthDetails(props){
// authentication code
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
            const listen = onAuthStateChanged(auth,(user)=>{
                if (user) {
                    setAuthUser(user)
                }else{
                    setAuthUser(null)
                }
            } )
    },[])
    const userSignOut = ()=>{
        signOut(auth).then(()=>{
            props.setSignedIn(false)
        })
    }

    return(
        <div className="containerr">
            <div className="header">
            <div>{authUser ? <p className="welcome"> Welcome {authUser.email}</p> : ''}</div>
            <div className="search">
                <input type="text" name="" id="text" placeholder="Search.." onChange={(e)=> props.setQuery(e.target.value)} />
            </div>
            <i className="fas fa-sign-out-alt signOut" onClick={userSignOut}></i>
        </div>
        </div>
    )
}
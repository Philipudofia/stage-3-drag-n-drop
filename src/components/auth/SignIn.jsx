import React from "react";
import './SignIn.css';
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn(props){
    const pasword = document.getElementById('pwd')
    const [email, setEmail] = React.useState('');
    const [passwordValue, setPassword] = React.useState('')
    const [error, setError] = React.useState(false)
    function showPassword() {
        pasword.type === 'password' ? pasword.type = 'text' : pasword.type = 'password'
    }
    function submit(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, passwordValue)
        .then((userCredentials)=> {
            props.setSignedIn(true)
        })
        .catch((error) =>{
            setError(true)
            props.setSignedIn(false)
        })
    }
    return(
        <div className="container">
            <div className="logo">
                <p>Drag and Drop</p>
            </div>
            <form className="login" onSubmit={submit}>
                <div className="h2">Welcome, please sign in to continue</div>
                <div className="emailContainer">
                    <p>Email</p>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="email" />
                </div>
                <div className="passwordContainer">
                    <p>Password</p>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="password" id="pwd" />
                    <div className="showPassword">
                        <p>Show password</p>
                        <input type="checkbox"  onClick={showPassword} id="" />
                    </div>
                </div>
                {error ? <p className="error">Invalid Login Credentials, please try again</p> : ''}
                <p className="forgotPassword">
                    <a href="" onClick={(e)=>e.preventDefault()}>Forgot Password?</a>
                </p>
                <button type="submit" className="signInBtn">Sign In</button>
            </form>
        </div>
    )
}

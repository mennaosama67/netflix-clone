import React, { useState } from "react";
import "./LoginScreen.css";
import logo from "../images/image-removebg-preview.png";
import SignInScreen from "./SigninScreen";


function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login__screen">
      <div className="loginScreen__background">
        <img src={logo} alt="logo" className="login__logo" />
        <button className="login__btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login__gradiant" />
      </div>
     
        {signIn ? (
         
          <SignInScreen />
        
        ) : (
          <div className="login__body">
            <h1>
              Unlimited movies, TV <br />
              shows, and more.
            </h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="login__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button onClick={() => setSignIn(true)}>Get Started</button>
              </form>
            </div>
          </div>
        )}
      </div>

  );
}

export default LoginScreen;

import React, { useState, useRef } from "react";
import "./SigninScreen.css";
import SigninScreen from "./SigninScreen";
import { auth } from "../firebase";
import {  createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
import { validUser } from '../redux/features/userSlice';
import { useSelector,useDispatch } from 'react-redux';
function SignUpScreen() {
  const [signIn, setSignIn] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate=useNavigate();
  const valid=useSelector((state) => state.user.isValid)
const dispatch = useDispatch();
  const signUpHandler = (e) => {
    e.preventDefault();
  createUserWithEmailAndPassword(
    auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then((userInfo) => {
        dispatch(validUser(true))
        navigate('home');
       
      }).catch((error) => dispatch(validUser(false)));
      
  };
  return (
    <div className="login__body2">
      {signIn ? (
        <SigninScreen />
      ) : (
        <div className="signinScreen">
          <form>
            <h1>Sign Up</h1>
            <input type="text" placeholder="Name" />
            <input type="email" ref={emailRef} placeholder="Email" />
            <input type="password" ref={passwordRef} placeholder="Password" />
            <input type="password" placeholder="Repeat Your Password" />
            <button type="submit" onClick={signUpHandler}>
              Sign Up
            </button>

            <h4>
              <span className="signin__gray">
                Do you already have an account?
              </span>{" "}
              <span className="signup__link" onClick={() => setSignIn(true)}>
                Sign In
              </span>
            </h4>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUpScreen;

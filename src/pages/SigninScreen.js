import React,{useState, useRef } from 'react';
import './SigninScreen.css'
import SignUpScreen from './SignUpScreen';
import { auth } from "../firebase";
import {  signInWithEmailAndPassword} from 'firebase/auth';
import { validUser } from '../redux/features/userSlice';
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'

function SigninScreen() {

const [signUp,setSignUp]=useState(false);
const emailRef = useRef(null);
const passwordRef = useRef(null);
const navigate=useNavigate();
const valid=useSelector((state) => state.user.isValid)
const dispatch = useDispatch();
const signInHandler = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(
    auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((userInfo) => {
      validUser(true)
      navigate('home');
     
    }).catch((error) => dispatch(validUser(false))); 
   
};
  return <div className="login__body2">
  {
    signUp?(
      <SignUpScreen/>
    ):
    (
      <div className="signinScreen">
      <form>
      <h1>Sign In</h1>
      <input type="email" ref={emailRef} placeholder='Email'/>
      <input type="password" ref={passwordRef} placeholder='Password' />
      <button type='submit' onClick={signInHandler}>Sign In</button>
      <span style={{display:`${valid===false?'block':'none'}`, color:'red'}}>Wrong Email or password</span>
      <button type='submit' onClick={() =>navigate('home')}>Sign In Anounmously</button>
      
      <h4><span className="signin__gray">New to Netflix?</span>  <span className="signup__link" onClick={()=> setSignUp(true)}> Sign up now.</span></h4>
    </form>
    </div>
    )
  }
    
  
  </div>;
}

export default SigninScreen;

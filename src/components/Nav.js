import React from "react";
import{useState,useEffect} from 'react'
import logo from '../images/image-removebg-preview.png'
import {useNavigate,Link} from 'react-router-dom'
import { auth } from "../firebase";
import {useDispatch} from  "react-redux";
import {logout} from '../redux/features/userSlice'
import {Modal} from "react-bootstrap";

import "./Nav.css";
import Search from "./Search";
function Nav() {
  const [openModal,setOpenModal]=useState(false)
    const [show,setShow]=useState(false);
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const navbarTransition=()=>{
        if(window.scrollY>100){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }
    useEffect(()=>{
         window.addEventListener('scroll',navbarTransition);
         //cleanUp function
         return ()=> window.removeEventListener('scroll',navbarTransition);
    },[])
 const signoutHandler=()=>{
 
  auth.signOut();
  dispatch(logout());
  navigate('/');
  
  
 }
  return (

    <div className={`nav ${show&&`nav__black`}`}>
      <div className="nav__content">
        <img src={logo} alt="netflex logo" className="nav__logo" onClick={()=>navigate('/')}/>
         <ul className="nav__list">
        <Link to='/home'><li>Home</li></Link> 
          <Link to='/tv'><li>TV Series</li></Link>
        <Link to='/movies'> <li>Movies</li></Link> 
        <Link to='/mylist'> <li>My List</li></Link> 
         </ul>
         <button className='discover_btn' onClick={() => setOpenModal(true)} >Discover <i class="fa-solid fa-angle-down"></i></button>
       <Modal  className="modal-container custom-map-modal" show={openModal} onHide={()=> setOpenModal(false)} size="lg" aria-labelledby="" >
       <Modal.Body className='nav__modal__body'>
       <div className="modal_list">
       <Link to='/home'><li>Home</li></Link> 
       <Link to='/tv'><li>TV Series</li></Link>
       <Link to='/movies'> <li>Movies</li></Link> 
       <Link to='/mylist'> <li>My List</li></Link> 
       </div>
       </Modal.Body>
       </Modal>
       <div className="modal modal-fullscreen-lg" id="modal-fullscreen-lg" tabIndex="-1" role="dialog" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
     
      <div className="modal-body">
       <p> vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      </div>
     
    </div>
  </div>
</div>

         <Search/>
        <div className="accordion  accordion-flush" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png " alt="avatar logo" className="nav__avatar__accordian" />
  
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" onClick={signoutHandler}>
            Sign Out
            </div>
          </div>
        </div>
      </div>
      </div>
   
    </div>
    
  );
}

export default Nav;

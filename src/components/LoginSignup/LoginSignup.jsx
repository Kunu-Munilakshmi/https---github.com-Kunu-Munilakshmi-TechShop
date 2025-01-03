import React, { useContext, useState, useEffect, useRef } from 'react'
import "./loginsignup.css"
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Shopcontext } from '../../context/ShopContext';

const LoginSignup = () => {
  const [action, setAction] = useState("");
  const {showModal,setShowModal}=useContext(Shopcontext);
  const loginCloseRef=useRef(null);
  const registerLink = () => {
    setAction('');
  }
  const loginLink = () => {
    setAction('active');
  }
  // closing LoginSignup comp onclick of outside 
    // useEffect(() => {
    //       const handleClickOutside = (event) => {
    //           if (loginCloseRef.current && !loginCloseRef.current.contains(event.target)) {
    //               setShowModal(false);
    //           }             
    //       };
  
    //       document.addEventListener("mousedown", handleClickOutside);
  
    //       return () => {
    //           document.removeEventListener("mousedown", handleClickOutside);
    //       };
    //   }, []);
  return (<>
    <div className={`wrapper ${action} `}>
      <form className="form-width  p-3 login-redirect ">
        <h3 className='text-white'>Signup</h3>
        <p className='close-btn' ref={loginCloseRef} onClick={()=>setShowModal(false)}><IoIosClose/></p>
        <p className='text-white mb-4'>Aready have an account? <a href="#" onClick={loginLink}>Login</a> </p>
        <div className="mb-3">
          <input className="bg-transparent w-100 p-2 border" type="text" placeholder='Username' />
        </div>
        <div className="mb-3">
          <input className="bg-transparent w-100 p-2 border" type="email" placeholder='Email' />
        </div>
        <div class="mb-3">
          <input className="bg-transparent border w-100 p-2" type="password" placeholder='Password' />
        </div>
        <div class="mb-3">
          <input className="bg-transparent border w-100 p-2" type="password" placeholder='Confirm Password' />
        </div>
        <button className='bg-danger text-white w-100 p-2 border-0'>Signup</button>
        <div class="line-with-text">Or login with</div>

        <div className='d-flex justify-content-between my-5 '>
          <button class="bg-primary border-0 d-block py-2 px-4 text-white fw-bold">Facebook</button>
          <button class="bg-danger border-0 d-block px-4 text-white fw-bold">Google</button>
          <button class="bg-primary border-0 d-block px-4 text-white fw-bold">Twitter</button>
        </div>
      </form>

      <form className="form-width  p-3 register">
        <h3 className='text-white'>Login</h3>
        <p className='close-btn' ref={loginCloseRef} onClick={()=>setShowModal(false)}><IoIosClose/></p>
        <p>New to Tech-Shop ?  <a href="#" onClick={registerLink} >Create an account</a></p>
        <div className="mb-3">
          <input className="bg-transparent w-100 p-2 border" type="email" placeholder='Email' />
        </div>
        <div class="mb-3">
          <input className="bg-transparent border w-100 p-2" type="password" placeholder='Password' />
        </div>
        <button className='bg-danger text-white w-100 p-2 border-0'>Login</button>
        <div class="line-with-text">Or login with</div>

        <div className='d-flex justify-content-between my-5 '>
          <button class="bg-primary border-0 d-block py-2 px-4 text-white fw-bold">Facebook</button>
          <button class="bg-danger border-0 d-block px-4 text-white fw-bold">Google</button>
          <button class="bg-primary border-0 d-block px-4 text-white fw-bold">Twitter</button>
        </div>
      </form>
    </div>
  </>
  )
}

export default LoginSignup
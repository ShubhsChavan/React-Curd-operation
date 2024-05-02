import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Login</span>
        <form className='registerForm'>
        <label htmlFor="">User Name</label>
            <input type="text" className="registerInput" placeholder='Enter your User Name' />

            <label htmlFor="">Email</label>
            <input type="text" className="registerInput" placeholder='Enter your Email...' />

            <label>Password</label>
            <input className="registerInput" type="password" placeholder="Enter your password..." />
            
            <button className="registerButton">Login</button>
        </form>

        <button className="registerLoginButton">Register</button>
    </div>
  )
}

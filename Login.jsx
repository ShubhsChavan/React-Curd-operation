import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className='loginForm'>
            <label htmlFor="">Email</label>
            <input type="text" className="loginInput" placeholder='Enter your Email...' />

            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter your password..." />
            
            <button className="loginButton">Login</button>
        </form>

        <button className="loginRegisterButton">Register</button>
    </div>
  )
}

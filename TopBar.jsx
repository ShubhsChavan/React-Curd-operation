import React from 'react'
import "./topbar.css"
import { NavLink, Outlet } from "react-router-dom";

export default function TopBar() {
  return (
    <>
    <div className='top'>
        <div className="left">
        <i className="top-icon fa-brands fa-facebook"></i>
        <i className="top-icon fa-brands fa-square-twitter"></i>
        <i className="top-icon fa-brands fa-instagram"></i>
        </div>
        <div className="center">
            <ul className="top-list">
             <NavLink
                style={({ isActive }) => (isActive ? { color: "blue",  textDecoration: "none"} : undefined)}
                to="/">
                <li className="top-list-items">HOME</li>
              
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "blue",  textDecoration: "none"} : undefined)}
                to="/contact">
                <li className="top-list-items">CONTACT </li>
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? { color: "blue",  textDecoration: "none"} : undefined)}
                to="/about">
                <li className="top-list-items">ABOUT</li>
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? { color: "blue",  border: "none"} : undefined)}
                to="/write">
                <li className="top-list-items">WRITE</li>
              </NavLink>

                <li className="top-list-items">LOGOUT</li>
            </ul>
        </div>
        <div className="right">
            <img className="top-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQGQl3fa3XdE-EHxIgcmMI2mmvU82FnuggQ&usqp=CAU" alt="krishnachavan" />
            <i className=" top-search-icon fa-solid fa-magnifying-glass"></i>
        </div>
        
    </div>
     
     <Outlet />
     </>
  )
}

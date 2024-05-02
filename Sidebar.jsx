import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-item">
            <span className="sidebar-title">ABOUT ME</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvY6vKH6NfuxEWktHlR_-WsAbblwnDK4FpTQ&usqp=CAU" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown</p>
        </div>
        <div className="sidebar-item">  
            <span className="sidebar-title">CATEGORIES</span>
            <ul className="sidebar-list">
                <li className="sidebar-items">Life</li>
                <li className="sidebar-items">Music</li>
                <li className="sidebar-items">Sport</li>
                <li className="sidebar-items">Cenema</li>
                <li className="sidebar-items">Motivation</li>
                <li className="sidebar-items">Tech</li>
            </ul>
        </div>

        <div className="sidebar-item">
            <span className="sidebar-title">FOLLOW US</span>
            <div className="social-icons">
                <i className="sidebar-icons fa-brands fa-facebook"></i>
                <i className="sidebar-icons fa-brands fa-square-twitter"></i>
                <i className="sidebar-icons fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}

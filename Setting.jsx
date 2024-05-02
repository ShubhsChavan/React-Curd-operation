import React from 'react'
import "./setting.css"
import Sidebar from '../../sidebar/Sidebar'

export default function Setting() {
  return (
    <div className='setting'>
      <div className="setting-wrapper">
        <div className="setting-title">
          <span className="settingupdate-title">Update Your Account</span>
          <span className="settingdelete-title">Delete Account</span>
        </div>
        <form  className="setting-form">
          <label htmlFor="">Profile Picture</label>
          <div className="settingpp">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfmPviGlHlKUpb0A9oM3pUTRf6KKZdIDl6Q&usqp=CAU" alt="" />
            <label htmlFor="fileinput">
            <i className="settingpp-icon fa-solid fa-user"></i>
            </label>
            <input type="file" id='fileinput' style={{display: "none"}}/>

          </div>

            <label >Username</label>
            <input type="text" placeholder='krishna' />

            <label >Email</label>
            <input type="text" placeholder='krishna@gmail.com' />

            <label >Password</label>
            <input type="text" placeholder='Pasword' />

            <button className="setting-submit">Update </button>

          
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}

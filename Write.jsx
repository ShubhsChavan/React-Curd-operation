import React, { useState } from 'react'
import "./write.css"

export default function Write() {

  const[formData, setFormData]= useState({title:"", content: ""});
  const[blogs, setBlogs]=useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setBlogs([{title: formData.title, content: formData.content} , ...blogs]);
    setFormData({title:"", content:""});
    console.log(blogs);
  }

  return (
    <div className='write'>
        <form className='writeform' onSubmit={handleSubmit}>
            <img className='write-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfmPviGlHlKUpb0A9oM3pUTRf6KKZdIDl6Q&usqp=CAU" alt="" />
            <div className="write-formgroup">
                <label htmlFor="file-input">
                <i className="write-icon fa-solid fa-plus"></i>
                </label>
                <input type="file"  id='file-input' style={{display: "none"}}  />
                <input type="text" className='write-input' placeholder='Title' autoFocus={true} value={formData.title} onChange={(e)=>setFormData({title: e.target.value, content: formData.content})} />

            </div>

            <div className="write-formgroup">
                <textarea placeholder='Write your story..' type="text" className='write-text' 
                value={formData.content} onChange={(e)=>setFormData({title:formData.title, content: e.target.value})} ></textarea>
            </div>

            <button className="write-submit" >Publish</button>
        </form>
    </div>
  )
}

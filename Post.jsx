import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <img className='post-img'
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfmPviGlHlKUpb0A9oM3pUTRf6KKZdIDl6Q&usqp=CAU" alt="" />
        
        <div className="post-info">
            <div className="post-cats">
                <span className='post-cat'>Music</span>
                <span className='post-cat'></span>
            </div>
            <span className='post-title'> Rose water is good for health</span>
            <hr/>
            <span className="post-date">1 hour ago</span>
        </div>
        <p className="post-des">Sun in Leo
           Sun is in its own sign when placed in Leo. It is a fiery masculine energy and Leo is also a fixed fire sign. When this placement exists in a horoscope, the native is likely to be of a kinglike stature. Such a person tends to be a courageous being, a destroyer of the enemies. Native always wins the competition. Sun in Leo also gives strong aggressive instincts and at times, such natives can also become selfish and egoistic. People with 
           this position of Sun have strong leadership qualities. 
           Sun in Leo
           Sun is in its own sign when placed in Leo. It is a fiery masculine energy and Leo is also a fixed fire sign. When this placement exists in a horoscope, the native is likely to be of a kinglike stature. Such a person tends to be a courageous being, a destroyer of the enemies. Native always wins the competition. Sun in Leo also gives strong aggressive instincts and at times, such natives can also become selfish and egoistic. People with this position of Sun have strong leadership qualities. 
           </p>
    </div>
  )
}

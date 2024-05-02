import React from 'react'
import './singlePost.css'

export default function Singlepost() {
  return (
    <div className='single-post'>
      <div className="single-post-wrapper">
        <img className='single-post-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfmPviGlHlKUpb0A9oM3pUTRf6KKZdIDl6Q&usqp=CAU" alt="" />
        <h1 className="single-post-title">
          Rose water good for health
          <div className="singlepost-edit">
            <i className="singlepost-icon fa-regular fa-pen-to-square"></i>
            <i className="singlepost-icon  fa-solid fa-trash"></i>
         </div>
        </h1>
        <div className="singlepost-info">
            <span>
              Author:<b>Krishna</b>
            </span>

            <span className='singlepost-date'>1 day ago</span>
         </div>
         
            <p className="singlepost-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
            a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
            a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
            a odit modi eos!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
            a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
            </p>

          
      </div>
    </div>
  )
}

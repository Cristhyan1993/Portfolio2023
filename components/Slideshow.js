import React from "react";
import {Zoom} from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"

const Slideshow = (props) => {

    const images = props.images    

      const zoomInProperties ={
        indicators:true,
        scale:1.2,
        duration:5000,
        transitionDuration:500,
        infinite:true,

        prevArrow:(
            <div style={{cursor: "pointer"}}>
                <svg className="w-8 lg:w-20" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -100 512 512"
                fill="#2e2e2e">
                    <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/>
                </svg>
            </div>
        ),
        nextArrow:(
            <div style={{width:"50px", marginLeft: "-15px", cursor: "pointer"}}>
                <svg className="w-8 m-4 lg:w-20 lg:m-0" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#2e2e2e">
                    <path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/>
                </svg>
            </div>
        )
      }
  return (
    <div className="m-10 w-full flex justify-center">
    <div className="max-w-[1240px]">
        <h1 className="text-center font-bold pb-10 text-gray-700 lg:text-6xl">
            Project <span className="text-[#007934]">Photos</span>
        </h1>
        <Zoom {...zoomInProperties}>
            {images.map((each,index)=>(
                <div key={index} className= "flex justify-center w-full h-full">
                <img src={each} className= "w-1/2 object-cover rounded-lg shadow-xl"/>

                </div>
            ))}
        </Zoom>
    </div>
    </div>
  )
}

export default Slideshow
import React from 'react'
import './singledata.css'

export default function SingleData({title,image,url}) {
    return (
        <div className="skill-cards">
            <a href={url}>
            <div className="skill-image">
            <img className="skill-image" src={image} alt="picname" />
            </div>
            </a>
            <h1> {title} </h1>
            
        </div>
    )
}

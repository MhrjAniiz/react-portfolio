import React from 'react'
import "./projectPage.css"


export default function ProjectPage({title,image,description,url}) {
    return (
        <div className="p-card">
        <a href={url}>
            <img src={image} alt="project_image"/>
            <div className="p-cardtext">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </a>
          
            
        </div>
        
    )
}

import React from 'react'
import './text.css'
import {Link} from 'react-router-dom'

export default function Text({children, name,description}) {
    return (
      
            <div className="text">
            <h1>hello !!</h1>
            <h2>{`i'm ${name}`}</h2>
            <p>{description}</p>
            <Link className="text-link" to="/about">
            <div className="text-button">about me</div>
            </Link>
            {children}
        </div>
        
        
    )
}

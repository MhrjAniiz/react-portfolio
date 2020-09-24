import React from 'react'
import './background.css'

export default function Background({children}) {
    return (
        <div className="background-image">
            {children}
        </div>
    )
}

import React from 'react'
import Title from '../components/title'
import {Link} from 'react-router-dom'
import './error.css'

export default function Error() {
    return (
        <div className="error">
           <Title title="error !! page not found"/>
           <Link className="text-link" to="/">
            <div className="error-button">return home</div>
            </Link>
        </div>
    )
}

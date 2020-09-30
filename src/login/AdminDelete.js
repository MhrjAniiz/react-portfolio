import React from 'react'
import './AdminDelete.css'

export default function AdminDelete({id,title,image}) {
    return (

        <>
      <div className="admindbody">
        <img src={image} alt="imgpic"/>
        <div className="delete-text">
        <h1>{title}</h1>
        <p>{`ID : ${id}`}</p>
        <button>delete</button>
        </div>
       
      
    </div>
    <hr className="dhr"/>
        </>
    )
}

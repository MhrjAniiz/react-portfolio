import React from 'react'
import './AdminDelete.css'

export default function AdminDelete({id,title,image, handleRemove}) {
    return (

        <>
      <div className="admindbody">
        <img className="imge"src={image} alt="imgpic"/>
        <div className="delete-text">
        <h1>{title}</h1>
        <p>{`ID : ${id}`}</p>
        <button onClick={()=>handleRemove(id)}>delete</button>
        </div>
       
      
    </div>
    <hr className="dhr"/>
        </>
    )
}

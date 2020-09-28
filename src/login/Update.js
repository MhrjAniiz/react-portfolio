import React from 'react'
import './update.css'
import { useContext } from "react";
import {portfolioContext } from "./context";

export default function Update() {
  const data = useContext(portfolioContext);
  const {handleChange,title,image,description, handlePost,url}= data;
    return (
      
    <div className="form-div">
        <form className="form-body" onSubmit={handlePost}>
          <h1>Insert your project</h1>
          <input type="text" name="title" placeholder="Enter Title"onChange={handleChange} value={title}/>
          
          <input type="text" name="description" placeholder="Description"value={description} onChange={handleChange}/>
          
          <input type="text" name="image" placeholder=" Paste your Image Url"  value={image} onChange={handleChange}/>
          
          <input type="text" name="url" placeholder="Page Url"  value={url} onChange={handleChange}/>
          <button type="submit">submit</button>
        </form>
      </div>
        
    )
}

import React  from "react";
import "./form.css";
import Avatar from "@material-ui/core/Avatar";


export default function Form({open,setOpen}) {

  
  return (
    <div className={open ? "bg-model hide" : "bg-model"}>
      <div className="model-content">
        <Avatar src="https://rb.gy/mavzmz" className="avatar" />
        <div
          className="close"
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          +
        </div>
        <form className="form">
          <input
            type="text"
            placeholder="email"
            autoFocus
            required
            
          />
         
          <input
            type="password"
            placeholder="password"
            required
            
          />
          
          <button className="btn" >
            Log in
          </button>
          <p className="text-form">note! only admin can log in</p>
        </form>
     
      </div>
    </div>
  );
}

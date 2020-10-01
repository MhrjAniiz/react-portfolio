import React from "react";
import "./button.css";
import {Link} from 'react-router-dom'

export default function button() {
  return (
    <div>
      <div className="button-body">
      
        <div className="image1-body">
        <Link className="btn-links" id="page" to="/projects">
          <img
            className="image1"
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Cartoon_Guy_In_Deep_Thought_Using_A_Computer.svg"
            alt="button1"
          />
          <h1 className="header">  projects done </h1>
          </Link>
          
        </div>
        
     
        <div className="image2-body">
          <Link className="btn-links" to="/skills">
          <img
            className="image2"
            src="https://image.flaticon.com/icons/svg/1066/1066455.svg"
            alt="button2"
          />
          <h1 className="header">languages i use</h1>
          </Link>
        </div>
        <div className="image2-body">
          <a className="resume" href="https://mhrjanish.pythonanywhere.com/static/image/anishcv-converted.pdf">
          <img
            className="image2"
            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Changing_Careers_Cartoon_With_Floating_Resumes.svg"
            alt="button2"
          />
          <h1 className="header">resume</h1>
          </a>
        </div>

      </div>
    </div>
  );
}

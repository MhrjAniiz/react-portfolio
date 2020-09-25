import React from "react";
import "./button.css";

export default function button() {
  return (
    <div>
      <div className="button-body">
        <div className="image1-body">
          <img
            className="image1"
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Cartoon_Guy_In_Deep_Thought_Using_A_Computer.svg"
            alt="button1"
          />
          <h1 className="header"> my projects</h1>
        </div>
        <div className="image2-body">
          <img
            className="image2"
            src="https://image.flaticon.com/icons/svg/1066/1066455.svg"
            alt="button2"
          />
          <h1 className="header">languages </h1>
        </div>
      </div>
    </div>
  );
}

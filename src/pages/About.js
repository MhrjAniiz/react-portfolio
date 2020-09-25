import React from "react";
import "./about.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function About() {
  return (
    <div className="about-main">
      <div className="about">
        <h1>about Me</h1>
        <p>
          Hello, I am Anish Maharjan currently a student in Bsc.csit aiming to
          become a web developer. I am familier with various programming
          languages like c , c++ , javascript, java ,python ,Django, html and
          css. Mostly , I like to work with react. I am more into front-end
          development.If you want to contact me for any kind of queries, project
          ideas, jobs, internships, I have listed the contact details below.
        </p>
      </div>
      <hr />
      <h4>Email: anishmaharjan17@gmail.com</h4>
      <h4>Contact Number : (+977) 9849221866</h4>
      <h4>kathmandu, Nepal</h4>
      <h4>Find me on social media : <a className="link1" href="https://www.facebook.com/mhrj.anish/">@mhrjanish</a></h4>
      <div className="links">
          <FacebookIcon  className="icon f"/>
          <InstagramIcon  className="icon i" />
          <LinkedInIcon  className="icon l"/>
          <GitHubIcon  className="icon g"/>
      </div>
    </div>
  );
}

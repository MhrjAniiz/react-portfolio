import React from 'react'
import {Link} from 'react-router-dom'
import Title from '../components/title'
import modal from 'react-modal'

export default function AdminPanel({handleSignOut}) {
    return (
        <div>
            <Title title="welcome admin" />
            <div>
      <div className="button-body">
      
        <div className="image1-body">
        <Link className="btn-links" to="/projects">
          <img
            className="image1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Cloud_upload_font_awesome.svg/512px-Cloud_upload_font_awesome.svg.png"
            alt="button1"
          />
          <h1 className="header">  Upload project </h1>
          </Link>
          
        </div>
        
     
        <div className="image2-body">
          <Link className="btn-links" to="/skills">
          <img
            className="image2"
            src="https://cdn.onlinewebfonts.com/svg/img_324189.png"
            alt="button2"
          />
          <h1 className="header">Delete project</h1>
          </Link>
        </div>
        <div className="image2-body"  onClick={handleSignOut}>
         
          <img
            className="image2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_logOut-ltr.svg/1024px-OOjs_UI_icon_logOut-ltr.svg.png"
            alt="button2"
          />
          <h1 className="header">Log out</h1>
         
        </div>

      </div>
            <modal isOpen={true}>
                <p>hello madar modal</p>
            </modal>

    </div>
          
        </div>
    )
}

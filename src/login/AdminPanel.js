import React from "react";
import Title from "../components/title";
import { useContext } from "react";
import { portfolioContext } from "./context";
import Modal from "react-modal";
import './update.css'
import {Link} from 'react-router-dom'
export default function AdminPanel({ handleSignOut, user }) {



  const info = useContext(portfolioContext);
  const {
    firstPop,

    setFirstPop,

    removeFirstPop,

    handlePost,
    handleChange,
    title,
    description,
    image,url,


  } = info;



  return (
    <div>
      <Title title="welcome anish" />
      <div>
        <div className="button-body">
          <div className="image1-body" onClick={setFirstPop}>
            <img
              className="image1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Cloud_upload_font_awesome.svg/512px-Cloud_upload_font_awesome.svg.png"
              alt="button1"
            />
            <h1 className="header"> Upload project </h1>
          </div>

          <div className="image2-body" >
            <Link className="btn-links" to="/admin/delete/admin-delete" >
            <img
              className="image2"
              src="https://cdn.onlinewebfonts.com/svg/img_324189.png"
              alt="button2"
            />
            <h1 className="header">Delete project</h1>
            </Link>
          </div>

          <div className="image2-body" onClick={handleSignOut}>
            <img
              className="image2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_logOut-ltr.svg/1024px-OOjs_UI_icon_logOut-ltr.svg.png"
              alt="button2"
            />
            <h1 className="header">admin logout </h1>
          </div>
        </div>
      </div>
      <Modal isOpen={firstPop} onRequestClose={() => removeFirstPop()}>
        <div className="form-div">
          <h1 onClick={()=> removeFirstPop()}>+</h1>
          <form className="form-body" onSubmit={handlePost}>
            <h1>Insert your project</h1>
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              onChange={handleChange}
              value={title}
            />

            <input
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={handleChange}
            />

            <input
              type="text"
              name="image"
              placeholder=" Paste your Image Url"
              value={image}
              onChange={handleChange}
            />

            <input
              type="text"
              name="url"
              placeholder="Page Url"
              value={url}
              onChange={handleChange}
            />
            <button type="submit">submit</button>
          </form>
        </div>
      </Modal>

    </div>
  );
}

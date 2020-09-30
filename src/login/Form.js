
import React from "react";
import './form.css'
import Avatar from '@material-ui/core/Avatar'


export default function Form(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    // handleSignUp,
 
    emailError,
    passwordError,
  } = props;
  return (

      <div className="loginContainer"> 
      <Avatar className="avg" src="https://logodix.com/logo/1707088.png"/> 
      <h1>Admin</h1>
  
      <input type="text" autoFocus required value={email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
      <p className="errorMsg">{emailError}</p>
     
      <input type="password"
      placeholder="password"
      required
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <p className="errorMsg">{passwordError}</p>
      <div className="btncontainer">
      <button onClick={handleLogin}>sign in</button>
         
      </div>
      </div>
)
}
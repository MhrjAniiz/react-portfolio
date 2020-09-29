
import React from "react";


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
  return <section className="login">

      <div className="loginContainer">  
      <label >username</label>
      <input type="text" autoFocus required value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <p className="errorMsg">{emailError}</p>
      <label>password</label>
      <input type="password"
      required
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <p className="errorMsg">{passwordError}</p>
      <div className="btncontainer">
      <button onClick={handleLogin}>sign in</button>
         
      </div>
      </div>
  </section>;
}
// import React  from "react";
// import "./form.css";
// import Avatar from "@material-ui/core/Avatar";


// export default function Form(props) {
//   const {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleLogin,
//     handleSignUp,
//     hasAccount,
//     sethasAccount,
//     emailError,
//     passwordError,
//   } = props;
//   return (
//     <div>
//     <div className= "bg-model">
//       <div className="model-content">
//         <h3>Admin</h3>
//         <Avatar src="https://rb.gy/mavzmz" className="avatar" />
        
//         <form className="form">
//           <input
//             type="text"
//             placeholder="email"
//             autoFocus
//             required
//             value={email} onChange={(e)=> setEmail(e.target.value)}
//           />
//           <p className="errorMsg">{emailError}</p>
//           <input
//             type="password"
//             placeholder="password"
//             required
//             value={password}
//       onChange={(e)=>setPassword(e.target.value)}
            
//           />
//           <p className="errorMsg">{passwordError}</p>
//           <button className="btn" onClick={handleLogin} >
//             Log in
//           </button>
//           <button onClick={handleSignUp}>sign up</button>
//           <p className="text-form">note! only admin can log in</p>
//         </form>
     
//       </div>
//     </div>
//     </div>
//   );
// }

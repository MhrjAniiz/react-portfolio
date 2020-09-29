
import {useState,useEffect} from 'react'
import React from 'react'
import fire from './firebase';
import AdminPanel from './AdminPanel';
import Form from  './Form';



export default function App() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [user,setUser] = useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError,setpasswordError]=useState('');
  const [hasAccount,sethasAccount]=useState(false);


  const clearInput = () =>{
    setEmail('');
    setPassword('');
  }

  const clearErrors = ()=>{
    setEmailError('');
    setpasswordError('');
  }


  // login function
  const handleLogin= ()=>{
    clearErrors();
    fire
    .auth().signInWithEmailAndPassword(email,password)
    .catch(err=>{
      switch(err.code){
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
              case "auth/wrong-password":
                setpasswordError(err.message);
                break;
      }
    });
  };

//   signup function
//   const handleSignUp = ()=>{
//     clearErrors();
//     fire.auth()
//     .createUserWithEmailAndPassword(email,password)
//     .catch(err=>{
//       switch(err.code){
//           case "auth/email-already-in-use":
//             case "auth/invalid-email":
//               setEmailError(err.message);
//               break;
//               case "auth/weak-password":
//                 setpasswordError(err.message);
//                 break;
//       }
//     });
//   };
  // logout
  const handleSignOut = () =>{
    fire.auth().signOut();
  }
  //checking whether sign in or not
  const authListener = ()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        clearInput();
        setUser(user);

      }else{
        setUser("");
      }
    })
  }
useEffect(()=>{
  authListener();
})

  return (
    <div>
      {user ? (<AdminPanel handleSignOut={handleSignOut}/>) : (  <Form
      email={email}
      setEmail={setEmail} 
      password={password}
      setPassword={setPassword}
      handleLogin = {handleLogin}
    //   handleSignUp={handleSignUp}
      hasAccount={hasAccount}
      sethasAccount={sethasAccount}
      emailError={emailError}
      passwordError={passwordError}
      
      />)}
    

    </div>
  )
}




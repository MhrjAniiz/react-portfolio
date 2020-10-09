import React from 'react'
import { useState,useEffect } from "react";
import "./Chat.css";
import {Input} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Message from './Message'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import {db} from '../login/firebase';

function Chat() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
    
    ]);
    const [userName,setUserName]= useState("");
  
  
    useEffect(()=>{
        //run once when the app component load
         db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot =>{
          setMessages(snapshot.docs.map(doc=> ({id:doc.id ,message:doc.data()})))
        })
      },[])
  
    useEffect(()=>{
      setUserName(prompt('please enter your name'))
    },[])
  
    const sendMessage = (event) => {
      event.preventDefault();
      db.collection('messages').add({
        message: input,
        username: userName,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
    
      setInput("");
    };
  
    return (
      <div>
      <h2 className="header">welcome {userName} to Global chat</h2>
      <FlipMove>
        {messages.map(({id,message}) => (
          <Message key={id} username={userName} message={message}/>
        ))}
  
        </FlipMove>
        <form className="app__form">
          <FormControl className="app__formcontrol">
           
            <Input className="app__input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
  
            <IconButton  className = "app__iconbtn" disabled={!input}
              variant="contained"
              color="primary"
              type="submit"
              onClick={sendMessage}>
            <SendIcon />
            </IconButton>
           
  
          </FormControl>
        </form>
       
      
      </div>
    );
}

export default Chat


import {useState} from 'react'
import React from 'react'
import './home.css'
import Form from '../login/Form'
import Background from '../components/Background'
import Text from '../components/Text'
import Title from '../components/title'
import Button from '../components/button'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';


export default function App() {
  const [open, setOpen] = useState(true);

  return (
 <div>
    <Background>
    <Text
      name="anish maharjan"
      description="I am a student focused to become a web developer"
    />

  </Background>
  <Form open={open} setOpen={setOpen}/>
  <Title title="choose what you wanna see" />
  <Button />
    <div className="circle">
      <div>
      <CommentRoundedIcon className="addcircle"/>
      </div>
     
      <div>
      <AddCircleIcon className="addcircle" onClick={()=>setOpen(!open)}/>
      </div>
      
    

    </div>
  
  </div>
    )

}




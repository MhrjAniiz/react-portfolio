import {Link} from 'react-router-dom'
import React from 'react'
import './home.css'
import Background from '../components/Background'
import Text from '../components/Text'
import Title from '../components/title'
import Button from '../components/button'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';


export default function App() {
  return (
 <div>
    <Background>
    <Text
      name="anish maharjan"
      description="I am a student focused to become a web developer"
    />

  </Background>
  <Title title="choose what you wanna see" />
  <Button />
    <div className="circle">
      <div>
      <CommentRoundedIcon className="addcircle"/>
      </div>
     
      <div>
        <Link to ="/login"><AddCircleIcon className="addcircle" /></Link>
      
      </div>
      
    

    </div>
  
  </div>
    )

}




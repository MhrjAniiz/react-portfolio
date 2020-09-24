
import './navbar.css'
import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    constructor(){
        super()
        this.state={
            isOpen: false
        }
    }

    handleClick = ()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
        
            <div className="navbar">
            
            <h1><Link to="/">portfolio</Link></h1>
            
            <div className={this.state.isOpen ? "nav-text show-text" : "nav-text "}>
                
            <p>resume</p>
           <p>
           <a href="https://github.com/MhrjAniiz">github</a>
           </p>
            
           
            
            <p><a href="https://www.linkedin.com/in/anish-maharjan-a175511a5/" >linkedin</a></p>
           
            <p> <Link to="/about">about me </Link></p>
            </div>
           
            <div  className="burger"  onClick={this.handleClick}>
            <MenuIcon />  
        </div>
            
        </div>
        

        )
    }
}


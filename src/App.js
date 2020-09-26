import React, { Component } from 'react'
import Home from './pages/home'
import { Route, Switch} from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/Navbar'
import SkillsPage from './pages/SkillsPage'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact  path="/skills" component={SkillsPage}/>
          </Switch>
       

      </div>
    )
  }
}

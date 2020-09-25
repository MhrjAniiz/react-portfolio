import React, { Component } from 'react'
import Home from './pages/home'
import { Route, Switch} from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/Navbar'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
       

      </div>
    )
  }
}

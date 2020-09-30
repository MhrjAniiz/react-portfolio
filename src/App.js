import React, { Component } from 'react'
import Home from './pages/home'
import { Route, Switch} from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/Navbar'
import SkillsPage from './pages/SkillsPage'
import Project from './components/Project'
import Error from './pages/Error'

import Login from './login/Login';
import AdminFilter from './login/AdminFilter'




export default class App extends Component {

  render() {
    return (
      <div>
    
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact  path="/skills" component={SkillsPage}/>
          <Route exact path="/projects" component={Project} />
          <Route exact path="/login" component={Login} />
          <Route exact="/admin/delete/admin-delete" component={AdminFilter} />
          <Route component={Error}/>
          </Switch>
          </div>

    
    )
  }
}

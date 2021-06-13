import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './auth/login'
import NewAccount from './auth/new-account'
import ProjectState from './context/projects/project-state'
import Projects from './projects/projects'

function App () {
  return (
    <ProjectState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/new-account" component={NewAccount}/>
          <Route exact path="/projects" component={Projects}/>
        </Switch>
      </Router>
    </ProjectState>
  )
}

export default App

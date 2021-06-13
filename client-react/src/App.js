import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './auth/login'
import NewAccount from './auth/new-account'
import ProjectList from './projects/project-list'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/new-account" component={NewAccount}/>
        <Route exact path="/projects" component={ProjectList}/>
      </Switch>
    </Router>
  )
}

export default App

import React from 'react'
import NewProject from '../projects/new-project'
import ProjectList from '../projects/project-list'

const Sidebar = () => {
  return (
    <aside>
      <h1>MERN<span>Tasks</span></h1>
      <NewProject/>
      <div className="proyectos">
        <h2>Your projects</h2>
        <ProjectList/>
      </div>
    </aside>
  )
}

export default Sidebar

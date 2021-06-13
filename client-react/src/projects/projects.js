import React from 'react'
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import FormTask from '../tasks/form-task'
import TaskList from '../tasks/task-list'

const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar/>
      <div className="seccion-principal">
        <Header/>
        <main>
          <FormTask/>
          <div className="contenedor-tareas">
            <TaskList/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Projects

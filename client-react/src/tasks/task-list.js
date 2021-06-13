import React, { Fragment, useContext } from 'react'
import ProjectContext from '../context/projects/project-context'
import Task from './task'

const TaskList = () => {
  const projectContext = useContext(ProjectContext)
  const { project, deleteProject } = projectContext

  if (!project) return <h2>Select a project</h2>

  const [currentProject] = project
  const tasksProject = [
    { name: 'Choose Platform', state: true },
    { name: 'Choose Colors', state: false },
    { name: 'Choose Payment Platforms', state: false },
    { name: 'Choose Hosting', state: true }
  ]
  const onClick = () => { deleteProject(currentProject.id) }

  return (
    <Fragment>
      <h2>Project: {currentProject.name}</h2>
      <ul className="listado-tareas">
        { tasksProject.length === 0
          ? (<li className="tarea">
            <p>No tasks</p>
          </li>)
          : tasksProject.map(task => (<Task key={task} task={task}/>))
        }
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={onClick}>Delete project &times;</button>
    </Fragment>
  )
}

export default TaskList

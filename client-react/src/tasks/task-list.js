import React, { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ProjectContext from '../context/projects/project-context'
import TaskContext from '../context/tasks/task-context'
import Task from './task'

const TaskList = () => {
  const projectContext = useContext(ProjectContext)
  const tasksContext = useContext(TaskContext)
  const { project, deleteProject } = projectContext
  const { tasksProject } = tasksContext

  if (!project) return <h2>Select a project</h2>

  const [currentProject] = project
  const onClick = () => {
    deleteProject(currentProject.id)
  }

  return (
    <Fragment>
      <h2>Project: {currentProject.name}</h2>
      <ul className="listado-tareas">
        {tasksProject.length === 0
          ? (
          <li className="tarea">
            <p>No tasks</p>
          </li>
            )
          : (
          <TransitionGroup>
            {tasksProject.map((task) => (
              <CSSTransition key={task.id} timeout={200} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
            )}
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={onClick}>
        Delete project &times;
      </button>
    </Fragment>
  )
}

export default TaskList

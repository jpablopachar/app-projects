import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import ProjectContext from '../context/projects/project-context'
import TaskContext from '../context/tasks/task-context'

const Task = ({ task }) => {
  const projectContext = useContext(ProjectContext)
  const tasksContext = useContext(TaskContext)
  const { project } = projectContext
  const { deleteTask, getTasks, changeTaskStatus, saveCurrentTask } = tasksContext
  const [currentProject] = project

  const taskDelete = (id) => {
    deleteTask(id)
    getTasks(currentProject.id)
  }

  const changeStatus = (task) => {
    if (task.status) {
      task.status = false
    } else {
      task.status = true
    }

    changeTaskStatus(task)
  }

  const selectTask = task => {
    saveCurrentTask(task)
  }

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.state
          ? (
          <button
            type="button"
            className="completo"
            onClick={() => changeStatus(task)}
          >
            Complete
          </button>
            )
          : (
          <button
            type="button"
            className="incompleto"
            onClick={() => changeStatus(task)}
          >
            Incomplete
          </button>
            )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={() => selectTask(task)}>
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => taskDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task

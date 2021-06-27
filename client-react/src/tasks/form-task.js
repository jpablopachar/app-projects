import React, { useContext, useEffect, useState } from 'react'
import ProjectContext from '../context/projects/project-context'
import TaskContext from '../context/tasks/task-context'

const FormTask = () => {
  const projectContext = useContext(ProjectContext)
  const taskContext = useContext(TaskContext)
  const { project } = projectContext
  const {
    errorTask,
    selectedTask,
    getTasks,
    addTask,
    validateTask,
    updateTask,
    cleantask
  } = taskContext
  const [task, setTask] = useState({ name: '' })
  const { name } = task

  useEffect(() => {
    if (selectedTask !== null) {
      setTask(selectedTask)
    } else {
      setTask({ name: '' })
    }
  }, [selectedTask])

  if (!project) return null

  const [currentProject] = project
  const handleChange = (event) => {
    addTask({
      ...task,
      [event.target.name]: event.target.value
    })
  }
  const onSubmit = (event) => {
    event.preventDefault()

    if (name.trim() === '') {
      validateTask()

      return
    }

    if (selectedTask === null) {
      task.projectId = currentProject.id
      task.status = false

      addTask(task)
    } else {
      updateTask(task)
      cleantask()
    }

    task.projectId = currentProject.id
    task.state = false

    addTask(task)
    getTasks(currentProject.id)
    setTask({ name: '' })
  }

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            name="name"
            className="input-text"
            placeholder="Task Name"
            value={selectedTask ? 'Edit task' : 'Add task'}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Add Task"
          />
        </div>
      </form>
      {errorTask
        ? (
        <p className="mensaje error">The task name is required.</p>
          )
        : null}
    </div>
  )
}

export default FormTask

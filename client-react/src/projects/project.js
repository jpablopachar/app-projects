import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import ProjectContext from '../context/projects/project-context'
import TaskContext from '../context/tasks/task-context'

const project = ({ project }) => {
  const projectContext = useContext(ProjectContext)
  const { currentProject } = projectContext
  const taskContext = useContext(TaskContext)
  const { getTasks } = taskContext

  const selectProject = id => {
    currentProject(id)
    getTasks(id)
  }

  return (
    <li>
      <button
        type="button"
        className="btn blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  )
}

project.propTypes = {
  project: PropTypes.object.isRequired
}

export default project

import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import ProjectContext from '../context/projects/project-context'

const project = ({ project }) => {
  const projectContext = useContext(ProjectContext)
  const { currentProject } = projectContext
  return (
    <li>
      <button
        type="button"
        className="btn blank"
        onClick={() => currentProject(project.id)}
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

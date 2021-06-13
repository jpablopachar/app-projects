import PropTypes from 'prop-types'
import React, { useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import {
  ADD_PROJECT,
  CURRENT_PROJECT, DELETE_PROJECT, GET_PROJECT,
  PROJECT_FORM,
  VALID_FORM
} from '../../types'
import ProjectContext from './project-context'
import ProjectReducer from './project-reducer'

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: 'Virtual Store' },
    { id: 2, name: 'Intranet' },
    { id: 3, name: 'Web Design' }
  ]
  const initialState = {
    projects: [],
    form: false,
    errorForm: false,
    project: null
  }
  const [state, dispatch] = useReducer(ProjectReducer, initialState)
  const showForm = () => {
    dispatch({ type: PROJECT_FORM })
  }
  const getProjects = () => {
    dispatch({
      type: GET_PROJECT,
      payload: projects
    })
  }
  const addProject = (project) => {
    project.id = uuid()

    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }
  const showError = () => {
    dispatch({ type: VALID_FORM })
  }
  const currentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId
    })
  }
  const deleteProject = projectId => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    })
  }

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorForm: state.errorForm,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        currentProject,
        deleteProject
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )
}

ProjectState.propTypes = {
  children: PropTypes.object.isRequired
}

export default ProjectState

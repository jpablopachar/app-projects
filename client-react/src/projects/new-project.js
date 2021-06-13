import React, { Fragment, useContext, useState } from 'react'
import ProjectContext from '../context/projects/project-context'

const NewProject = () => {
  const projectContext = useContext(ProjectContext)
  const { form, errorForm, showForm, addProject, showError } = projectContext
  const [project, setProject] = useState({ name: '' })
  const { name } = project
  const onChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value
    })
  }
  const onSubmit = (event) => {
    event.preventDefault()

    if (name === '') {
      showError()

      return
    }

    addProject(project)
    setProject({ name: '' })
  }
  const onClickForm = () => {
    showForm()
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario" onClick={ onClickForm }>
        New Project
      </button>
      { form
        ? (
          <form className="formulario-nuevo-proyecto" onSubmit={onSubmit}>
            <input
              type="text"
              className="input-text"
              name="name"
              placeholder="New project"
              value={name}
              onChange={onChange}
            />
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Add project"
            />
          </form>
          )
        : null
      }
      { errorForm ? <p className="mensaje error">Project name is required.</p> : null }
    </Fragment>
  )
}

export default NewProject

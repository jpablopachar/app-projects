import React, { useContext } from 'react'
import ProjectContext from '../context/projects/project-context'

const FormTask = () => {
  const projectContext = useContext(ProjectContext)
  const { project } = projectContext

  if (!project) return null

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            name="name"
            className="input-text"
            placeholder="Task Name"
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
    </div>
  )
}

export default FormTask

import React, { useContext, useEffect } from 'react'
import ProjectContext from '../context/projects/project-context'
import Project from '../projects/project'

const ProjectList = () => {
  const projectContext = useContext(ProjectContext)
  const { projects, getProjects } = projectContext

  useEffect(() => {
    getProjects()
  }, [])

  if (projects.length === 0) return <p>There are no projects, start by creating one</p>

  return (
    <ul className="listado-proyectos">
      { projects.map(project => (
        <Project key={project.id} project={project}/>
      )) }
    </ul>
  )
}

export default ProjectList

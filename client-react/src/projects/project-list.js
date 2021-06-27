import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
      <TransitionGroup>
        { projects.map(project => (
          <CSSTransition key={project.id} timeout={200} classNames="proyecto">
            <Project project={project}/>
          </CSSTransition>
        )) }
      </TransitionGroup>
    </ul>
  )
}

export default ProjectList

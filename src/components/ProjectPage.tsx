import React from 'react'
import { ProjectCodable } from '../models/ProjectCodable.js'

type Props = {
  selectedProject: ProjectCodable
}

const ProjectPage = ({ selectedProject }: Props) => {
  return (
    <section>
      Project
      {selectedProject.title}
      {selectedProject.description}
      {selectedProject.dueDate}
    </section>
  )
}

export default ProjectPage

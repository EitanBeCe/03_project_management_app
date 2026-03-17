import { Dispatch, SetStateAction, useState } from 'react'
import { ProjectCodable } from '../models/ProjectCodable.js'

type Props = {
  projects: ProjectCodable[]
  setProjects: Dispatch<SetStateAction<ProjectCodable[]>>
}

const AddProjectPage = ({ projects, setProjects }: Props) => {
  const [isTitleError, setIsTitleError] = useState(false)

  const addProject = (newProject: ProjectCodable) => {
    if (projects.some(p => p.title == newProject.title)) {
      setIsTitleError(true)
    } else {
      setIsTitleError(false)

      setProjects(prev => [...prev, newProject])
    }
  }

  return (
    <section>
      <button onClick={() => addProject({ title: 'Pr 1' })}>Save</button>

      {isTitleError && (
        <p className="text-red-400 mt-2">
          You already have a project with that name
        </p>
      )}
    </section>
  )
}

export default AddProjectPage

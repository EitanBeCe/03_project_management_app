import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react'
import { ProjectCodable } from '../models/ProjectCodable.js'
import Input from './Input.js'

type Props = {
  projects: ProjectCodable[]
  setProjects: Dispatch<SetStateAction<ProjectCodable[]>>
}

const AddProjectPage = ({ projects, setProjects }: Props) => {
  const [isTitleError, setIsTitleError] = useState(false)
  const newProject = useRef<ProjectCodable | null>(null)

  const addProject = (newProject: ProjectCodable | null) => {
    if (!newProject) {
      return
    }

    if (projects.some(p => p.title == newProject.title)) {
      setIsTitleError(true)
    } else {
      setIsTitleError(false)

      setProjects(prev => [...prev, newProject])
    }
  }

  const onChange = (e: ChangeEvent) => {
    newProject.current
  }

  return (
    <section className="p-10 md:min-w-[50vw]">
      <menu className="flex gap-2">
        <li>
          <button
            className="bg-emerald-600 hover:bg-emerald-800 p-2 px-6 rounded-md text-white"
            onClick={() => addProject(newProject.current)}
          >
            Save
          </button>
        </li>
        <li>
          <button className="bg-slate-400 hover:bg-slate-600 p-2 px-4 rounded-md text-white">
            Cancel
          </button>
        </li>
      </menu>

      <Input label="Title" />
      <Input label="Description" isTextarea />
      <Input label="Due Date" />

      {isTitleError && (
        <p className="text-red-400 mt-2">
          No title or you already have a project with that name
        </p>
      )}
    </section>
  )
}

export default AddProjectPage

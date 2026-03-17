import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react'
import { ProjectCodable } from '../models/ProjectCodable.js'
import Input from './Input.js'

type Props = {
  projects: ProjectCodable[]
  setProjects: Dispatch<SetStateAction<ProjectCodable[]>>
}

const AddProjectPage = ({ projects, setProjects }: Props) => {
  const [isTitleError, setIsTitleError] = useState(false)
  // const newProject = useRef<ProjectCodable | null>(null)

  const title = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLTextAreaElement>(null)
  const dueDate = useRef<HTMLInputElement>(null)

  const addProject = (newProject: ProjectCodable | null) => {
    if (!newProject) {
      return
    }

    if (
      projects.some(p => p.title === newProject.title) ||
      newProject.title.trim() === ''
    ) {
      setIsTitleError(true)
    } else {
      setIsTitleError(false)
      setProjects(prev => [...prev, newProject])
    }
  }

  return (
    <section className="p-10 min-w-[50vw]">
      <menu className="flex gap-2">
        <li>
          <button
            className="bg-emerald-600 hover:bg-emerald-800 p-2 px-6 rounded-md text-white"
            onClick={() =>
              addProject({
                title: title.current?.value ?? '',
                description: description.current?.value ?? '',
                dueDate: dueDate.current?.value ?? ''
              })
            }
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

      <Input ref={title} label="Title" />
      <Input ref={description} label="Description" isTextarea />
      <Input ref={dueDate} label="Due Date" />

      {isTitleError && (
        <p className="text-red-400 mt-2">No title, or title duplicate</p>
      )}
    </section>
  )
}

export default AddProjectPage

import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { ProjectCodable } from '../models/ProjectCodable.js'
import Input from './Input.js'
import Modal from './Modal.js'

type Props = {
  projects: ProjectCodable[]
  setProjects: Dispatch<SetStateAction<ProjectCodable[]>>
  setIsAddingProject: Dispatch<SetStateAction<boolean>>
  setSelectedProjectTitle: Dispatch<SetStateAction<string>>
}

const AddProjectPage = ({
  projects,
  setProjects,
  setIsAddingProject,
  setSelectedProjectTitle
}: Props) => {
  const [isTitleError, setIsTitleError] = useState(false)
  const modalRef = useRef(null)

  const title = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLTextAreaElement>(null)
  const dueDate = useRef<HTMLInputElement>(null)

  const buildProject = (): ProjectCodable => ({
    title: title.current?.value.trim() ?? '',
    description: description.current?.value ?? '',
    dueDate: dueDate.current?.value ?? ''
  })

  const addProject = () => {
    const newProject = buildProject()

    const hasInvalidTitle =
      newProject.title === '' ||
      projects.some(project => project.title === newProject.title)

    setIsTitleError(hasInvalidTitle)

    if (hasInvalidTitle) {
      return
    }

    setProjects(prev => [...prev, newProject])
    setSelectedProjectTitle(newProject.title)
    setIsAddingProject(false)
  }

  return (
    <section className="p-10 min-w-[50vw]">
      {isTitleError && (
        <Modal ref={modalRef}>
          <p className="text-red-400 mt-2">No title, or title duplicate</p>
        </Modal>
      )}

      <menu className="flex gap-2">
        <li>
          <button
            className="bg-emerald-600 hover:bg-emerald-800 p-2 px-6 rounded-md text-white"
            onClick={addProject}
          >
            Save
          </button>
        </li>

        <li>
          <button
            className="bg-slate-400 hover:bg-slate-600 p-2 px-4 rounded-md text-white"
            onClick={() => setIsAddingProject(false)}
          >
            Cancel
          </button>
        </li>
      </menu>

      <Input type="text" ref={title} label="Title" />
      <Input ref={description} label="Description" isTextarea />
      <Input type="date" ref={dueDate} label="Due Date" />
      {/* 
      {isTitleError && (
        <p className="text-red-400 mt-2">No title, or title duplicate</p>
      )} */}
    </section>
  )
}

export default AddProjectPage

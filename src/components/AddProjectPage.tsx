import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { ProjectCodable } from '../models/ProjectCodable.js'
import Input from './Input.js'
import Modal, { ModalHandle } from './Modal.js'

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
  const errorModalRef = useRef<ModalHandle>(null)

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

    if (hasInvalidTitle) {
      errorModalRef.current?.open()
      return
    }

    setProjects(prev => [...prev, newProject])
    setSelectedProjectTitle(newProject.title)
    setIsAddingProject(false)
  }

  return (
    <section className="p-10 min-w-[50vw]">
      <Modal ref={errorModalRef}>
        <h2 className="text-xl font-semibold text-stone-900">Invalid Input</h2>
        <p className="mt-2 text-sm text-rose-600">
          No title, or title duplicate
        </p>
      </Modal>

      <menu className="flex gap-2">
        <li>
          <button
            className="bg-teal-700 hover:bg-teal-800 p-2 px-6 rounded-md text-base font-semibold text-white"
            onClick={addProject}
          >
            Save
          </button>
        </li>

        <li>
          <button
            className="bg-stone-300 hover:bg-stone-400 p-2 px-4 rounded-md text-base font-medium text-stone-700"
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

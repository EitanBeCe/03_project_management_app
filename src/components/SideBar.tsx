import { Dispatch, SetStateAction, useState } from 'react'
import { ProjectCodable } from '../App.js'

interface SideBarProps {
  projects: ProjectCodable[]
  setProjects: Dispatch<SetStateAction<ProjectCodable[]>>
}

const SideBar = ({ projects, setProjects }: SideBarProps) => {
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
    <aside className="w-1/3 p-4 bg-purple-900 text-white md:w-72 rounded-r-xl">
      <h2 className="text-3xl my-28 font-bold uppercase">Your projects</h2>

      <button
        className="text-xl bg-slate-600 p-1 px-4 rounded-md hover:bg-purple-400"
        onClick={() => addProject({ title: 'Pr 1' })}
      >
        + Add Project
      </button>

      {isTitleError && (
        <p className="text-red-400 mt-2">
          You already have a project with that name
        </p>
      )}

      <ul className="my-10">
        {projects.map(p => (
          <li key={p.title}>{p.title}</li>
        ))}
      </ul>
    </aside>
  )
}

export default SideBar

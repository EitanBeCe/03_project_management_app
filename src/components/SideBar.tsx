import { Dispatch, SetStateAction, useState } from 'react'
import { ProjectCodable } from '../models/ProjectCodable.js'

interface SideBarProps {
  projects: ProjectCodable[]
  setIsAddingProject: Dispatch<SetStateAction<boolean>>
  selectedProjectTitle: string
  setSelectedProjectTitle: Dispatch<SetStateAction<string>>
}

const SideBar = ({
  projects,
  setIsAddingProject,
  selectedProjectTitle,
  setSelectedProjectTitle
}: SideBarProps) => {
  console.log(selectedProjectTitle)

  return (
    <aside className="w-1/3 p-4 bg-purple-900 text-white md:w-72 rounded-r-xl">
      <h2 className="text-3xl my-28 font-bold uppercase">Your projects</h2>

      <button
        className="text-xl bg-slate-600 p-1 px-4 rounded-md hover:bg-purple-400"
        onClick={() => setIsAddingProject(true)}
      >
        + Add Project
      </button>

      <ul className="my-10">
        {projects.map(p => (
          <li
            key={p.title}
            className={`py-1 px-3 ${selectedProjectTitle === p.title ? 'bg-purple-500 rounded-md' : ''}`}
          >
            <button
              className="line-clamp-1"
              onClick={() => setSelectedProjectTitle(p.title)}
            >
              {p.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SideBar

import { Dispatch, SetStateAction } from 'react'
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
  return (
    <aside className="w-1/3 p-4 bg-slate-900 text-slate-50 md:w-72 rounded-r-xl">
      <h2 className="mt-4 mb-20 text-2xl font-bold uppercase text-stone-100">
        Your projects
      </h2>

      <button
        className="bg-teal-700 p-1 px-4 rounded-md text-base font-semibold text-white hover:bg-teal-600"
        onClick={() => setIsAddingProject(true)}
      >
        + Add Project
      </button>

      <ul className="my-10">
        {projects.map(p => (
          <li
            key={p.title}
            className={`py-1 px-3 rounded-md ${selectedProjectTitle === p.title ? 'bg-slate-700 text-teal-200 pointer-events-none' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
          >
            <button
              className="line-clamp-1 w-full text-left text-sm font-medium"
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

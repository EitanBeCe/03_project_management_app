import { Dispatch, SetStateAction } from 'react'
import img from '../assets/no-projects.png'

type Props = {
  setIsAddingProject: Dispatch<SetStateAction<boolean>>
}

const NoProjectsPage = ({ setIsAddingProject }: Props) => {
  return (
    <div className="text-center gap-y-8">
      <img
        src={img}
        alt="no-projects-image"
        className="h-32 object-contain mx-auto"
      />

      <h2 className="my-4 text-2xl font-bold text-slate-800">
        No Project Selected
      </h2>
      <p className="mb-4 text-base text-slate-500">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <button
          onClick={() => setIsAddingProject(true)}
          className="bg-teal-700 hover:bg-teal-800 p-2 px-6 rounded-md text-base font-semibold text-white"
        >
          + Create new project
        </button>
      </p>
    </div>
  )
}

export default NoProjectsPage

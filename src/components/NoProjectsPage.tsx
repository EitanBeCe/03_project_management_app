import { Dispatch, SetStateAction } from 'react'
import img from '../assets/no-projects.png'

type Props = {
  setIsAddProject: Dispatch<SetStateAction<boolean>>
}

const NoProjectsPage = ({ setIsAddProject }: Props) => {
  return (
    <div className="text-center gap-y-8">
      <img
        src={img}
        alt="no-projects-image"
        className="h-32 object-contain mx-auto"
      />

      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <button
          onClick={() => setIsAddProject(true)}
          className="bg-emerald-600 hover:bg-emerald-800 p-2 px-6 rounded-md text-white"
        >
          + Create new project
        </button>
      </p>
    </div>
  )
}

export default NoProjectsPage

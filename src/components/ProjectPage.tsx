import { Dispatch, SetStateAction } from 'react'
import { ProjectCodable } from '../models/ProjectCodable.js'

type Props = {
  // projects: ProjectCodable[]
  setProjects: Dispatch<SetStateAction<ProjectCodable[]>>
  selectedProject: ProjectCodable
}

const ProjectPage = ({ setProjects, selectedProject }: Props) => {
  const handleDelete = () => {
    // const index = projects.indexOf(selectedProject)

    // setProjects(prev => prev.splice(index, 1))

    setProjects(prev => prev.filter(p => p.title !== selectedProject.title))

    // setSelectedProjectTitle('')
  }

  return (
    <section className="flex flex-col gap-4">
      <header className="border-b border-stone-200 pb-4">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
          Project
        </p>
        <h2 className="mt-2 text-4xl font-bold text-slate-900">
          {selectedProject.title}
        </h2>
      </header>

      <div className="flex flex-col gap-4 text-base text-slate-700">
        <p>{selectedProject.description || 'No description provided.'}</p>

        <p className="text-sm font-medium text-slate-500">
          Due date: {selectedProject.dueDate || 'Not set'}
        </p>
      </div>

      <button
        onClick={handleDelete}
        className="mt-10 w-fit rounded-md border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:border-rose-300 hover:bg-rose-100 hover:text-rose-800"
      >
        Delete
      </button>
    </section>
  )
}

export default ProjectPage

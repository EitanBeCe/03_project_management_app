import { ProjectCodable } from '../models/ProjectCodable.js'

type Props = {
  selectedProject: ProjectCodable
}

const ProjectPage = ({ selectedProject }: Props) => {
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
    </section>
  )
}

export default ProjectPage

import { ProjectCodable } from '../models/ProjectCodable.js'

type Props = {
  selectedProject: ProjectCodable
}

const ProjectPage = ({ selectedProject }: Props) => {
  return (
    <section className="flex flex-col gap-4">
      <header className="border-b border-stone-200 pb-4">
        <p className="text-sm font-bold uppercase tracking-wide text-stone-400">
          Project
        </p>
        <h2 className="mt-2 text-3xl font-bold text-stone-800">
          {selectedProject.title}
        </h2>
      </header>

      <div className="flex flex-col gap-4 text-stone-700">
        <p>{selectedProject.description || 'No description provided.'}</p>

        <p className="text-sm text-stone-500">
          Due date: {selectedProject.dueDate || 'Not set'}
        </p>
      </div>
    </section>
  )
}

export default ProjectPage

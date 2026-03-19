import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { ProjectCodable, TaskCodable } from '../models/ProjectCodable.js'
import Input from './Input.js'

type Props = {
  projects: ProjectCodable[]
  setProjects: Dispatch<SetStateAction<ProjectCodable[]>>
  selectedProject: ProjectCodable
}

const ProjectPage = ({ projects, setProjects, selectedProject }: Props) => {
  const taskInputRef = useRef<HTMLInputElement>(null)
  const [isTaskError, setIsTaskError] = useState(false)

  const handleAddTask = () => {
    const text = taskInputRef.current?.value.trim()

    if (!text || selectedProject.tasks?.some(t => t.text === text)) {
      setIsTaskError(true)
      return
    }

    const tasks: TaskCodable[] = [...(selectedProject.tasks ?? []), { text }]

    const updatedProject: ProjectCodable = { ...selectedProject, tasks }

    setProjects(prev =>
      prev.map(project =>
        project.title === selectedProject.title ? updatedProject : project
      )
    )

    setIsTaskError(false)

    if (taskInputRef.current) {
      taskInputRef.current.value = ''
    }
  }

  const handleDeleteTask = (taskText: string) => {
    const tasks: TaskCodable[] =
      selectedProject.tasks?.filter(t => t.text !== taskText) ??
      selectedProject.tasks ??
      []

    const updatedProject: ProjectCodable = { ...selectedProject, tasks }

    setProjects(prev =>
      prev.map(project =>
        project.title === selectedProject.title ? updatedProject : project
      )
    )
  }

  const handleDeleteProject = () => {
    setProjects(prev => prev.filter(p => p.title !== selectedProject.title))
  }

  return (
    <section className="flex flex-col gap-4">
      <header className="flex border-b border-stone-200 pb-4 justify-between">
        <div className="">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
            Project
          </p>
          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            {selectedProject.title}
          </h2>
        </div>

        <button
          onClick={handleDeleteProject}
          className="w-fit my-auto rounded-md border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:border-rose-300 hover:bg-rose-100 hover:text-rose-800"
        >
          Delete
        </button>
      </header>

      <div className="flex flex-col gap-4 text-base text-slate-700">
        <p>{selectedProject.description || 'No description provided.'}</p>

        <p className="text-sm font-medium text-slate-500">
          Due date: {selectedProject.dueDate || 'Not set'}
        </p>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Tasks
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Project checklist
            </h2>
          </div>

          <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-500 shadow-sm">
            {selectedProject.tasks?.length ?? 0} items
          </span>
        </div>

        <div className="mt-5 flex items-end gap-3">
          <div className="flex-1">
            <Input ref={taskInputRef} label="Add task" />
          </div>

          <button
            onClick={handleAddTask}
            className="h-fit rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Add
          </button>
        </div>

        {isTaskError && (
          <p className="mt-3 rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700">
            Enter a unique task name. Empty tasks and duplicates are not
            allowed.
          </p>
        )}

        <ul className="mt-5 flex flex-col gap-3">
          {selectedProject.tasks?.map(t => (
            <li
              key={t.text}
              className="flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm"
            >
              <span className="text-sm font-medium text-slate-700">
                {t.text}
              </span>

              <button
                onClick={() => handleDeleteTask(t.text)}
                className="rounded-md border border-stone-200 px-3 py-1.5 text-sm font-semibold text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700"
              >
                Clear
              </button>
            </li>
          ))}

          {!selectedProject.tasks?.length && (
            <li className="rounded-xl border border-dashed border-stone-300 bg-white/80 px-4 py-6 text-center text-sm text-slate-500">
              No tasks yet. Add the first step for this project.
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default ProjectPage

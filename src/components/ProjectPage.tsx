import { Dispatch, SetStateAction, useRef } from 'react'
import { ProjectCodable, TaskCodable } from '../models/ProjectCodable.js'
import Input from './Input.js'

type Props = {
  projects: ProjectCodable[]
  setProjects: Dispatch<SetStateAction<ProjectCodable[]>>
  selectedProject: ProjectCodable
}

const ProjectPage = ({ projects, setProjects, selectedProject }: Props) => {
  const taskInputRef = useRef<HTMLInputElement>(null)

  const handleAddTask = () => {
    const text = taskInputRef.current?.value.trim()
    if (!text) return

    const tasks: TaskCodable[] = [...(selectedProject.tasks ?? []), { text }]

    const updatedProject: ProjectCodable = { ...selectedProject, tasks }

    setProjects(prev => {
      return prev.map(project =>
        project.title === selectedProject.title ? updatedProject : project
      )
    })

    if (taskInputRef.current) {
      taskInputRef.current.value = ''
    }
  }

  // const handleDeleteTask

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

      <div>
        <h2>Tasks</h2>

        <Input ref={taskInputRef} label="Add task" />
        <button onClick={handleAddTask}>Save</button>

        <ul>
          {selectedProject.tasks?.map(p => (
            <li key={p.text}>{p.text}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProjectPage

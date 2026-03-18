import { useEffect, useLayoutEffect, useState } from 'react'
import SideBar from './components/SideBar.js'
import AddProjectPage from './components/AddProjectPage.js'
import { ProjectCodable } from './models/ProjectCodable.js'
import NoProjectsPage from './components/NoProjectsPage.js'
import ProjectPage from './components/ProjectPage.js'

function App() {
  const [projects, setProjects] = useState<ProjectCodable[]>([])
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [selectedProjectTitle, setSelectedProjectTitle] = useState('')

  const selectedProject = projects.find(p => p.title === selectedProjectTitle)

  useLayoutEffect(() => {
    if (projects.length > 0 && !selectedProjectTitle) {
      setSelectedProjectTitle(projects[projects.length - 1].title)
    }
  })

  return (
    <main className="h-screen flex">
      <SideBar
        projects={projects}
        setIsAddingProject={setIsAddingProject}
        selectedProjectTitle={selectedProjectTitle}
        setSelectedProjectTitle={setSelectedProjectTitle}
      />

      {isAddingProject ? (
        <AddProjectPage
          projects={projects}
          setProjects={setProjects}
          setIsAddingProject={setIsAddingProject}
        />
      ) : (
        <section className="flex-1 p-10">
          {projects.length === 0 && (
            <NoProjectsPage setIsAddingProject={setIsAddingProject} />
          )}

          {projects.length !== 0 && selectedProject && (
            <ProjectPage selectedProject={selectedProject} />
          )}
        </section>
      )}
    </main>
  )
}

export default App

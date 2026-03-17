import { useState } from 'react'
import SideBar from './components/SideBar.js'
import AddProjectPage from './components/AddProjectPage.js'
import { ProjectCodable } from './models/ProjectCodable.js'
import NoProjectsPage from './components/NoProjectsPage.js'
import ProjectPage from './components/ProjectPage.js'

function App() {
  const [projects, setProjects] = useState<ProjectCodable[]>([])
  const [isAddProject, setIsAddProject] = useState(false)
  const [selectedProjectTitle, setSelectedProjectTitle] = useState('')

  return (
    <main className="h-screen flex">
      <SideBar
        projects={projects}
        setIsAddProject={setIsAddProject}
        selectedProjectTitle={selectedProjectTitle}
        setSelectedProjectTitle={setSelectedProjectTitle}
      />

      {isAddProject ? (
        <AddProjectPage projects={projects} setProjects={setProjects} />
      ) : (
        <section className="flex-1 p-10">
          {projects.length === 0 && (
            <NoProjectsPage setIsAddProject={setIsAddProject} />
          )}

          {projects.length !== 0 && <ProjectPage />}
        </section>
      )}
    </main>
  )
}

export default App

import { useState } from 'react'
import MainSection from './components/MainSection.js'
import SideBar from './components/SideBar.js'
import AddProjectPage from './components/AddProjectPage.js'
import NoProjectsPage from './components/NoProjectsPage.js'
import { ProjectCodable } from './models/ProjectCodable.js'

function App() {
  const [projects, setProjects] = useState<ProjectCodable[]>([])
  const [isAddProject, setIsAddProject] = useState(false)
  const [selectedProjectTitle, setSelectedProjectTitle] = useState('')

  return (
    <main className="h-screen flex flex-row">
      <SideBar
        projects={projects}
        setIsAddProject={setIsAddProject}
        selectedProjectTitle={selectedProjectTitle}
        setSelectedProjectTitle={setSelectedProjectTitle}
      />

      {projects.length === 0 && !isAddProject && <NoProjectsPage />}

      {isAddProject && (
        <AddProjectPage projects={projects} setProjects={setProjects} />
      )}

      <MainSection projects={projects} />
    </main>
  )
}

export default App

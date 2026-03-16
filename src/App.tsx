import { useState } from 'react'
import MainSection from './components/MainSection.js'
import SideBar from './components/SideBar.js'

export interface ProjectCodable {
  title: string
}

function App() {
  const [projects, setProjects] = useState<ProjectCodable[]>([])

  return (
    <main className="h-screen flex flex-row">
      <SideBar projects={projects} setProjects={setProjects}/>
      <MainSection />
    </main>
  )
}

export default App

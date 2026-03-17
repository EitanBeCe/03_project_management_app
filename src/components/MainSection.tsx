import { ProjectCodable } from '../models/ProjectCodable.js'
import NoProjectsPage from './NoProjectsPage.js'
import ProjectPage from './ProjectPage.js'

interface MainSectionProps {
  projects: ProjectCodable[]
}

const MainSection = ({ projects }: MainSectionProps) => {
  return (
    <section className="flex-1 p-10">
      {projects.length === 0 && <NoProjectsPage />}

      {projects.length !== 0 && <ProjectPage />}
    </section>
  )
}

export default MainSection

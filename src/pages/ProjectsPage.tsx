import { ProjectsSection } from '../components/sections/ProjectsSection'
import { PageHeader } from '../components/ui/PageHeader'

export function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="Explore some of our residential and villa projects across Pune."
      />
      <ProjectsSection compact />
    </div>
  )
}


import { AboutSection } from '../components/sections/AboutSection'
import { FounderSection } from '../components/sections/FounderSection'
import { MissionSection } from '../components/sections/MissionSection'
import { VisionSection } from '../components/sections/VisionSection'
import { PageHeader } from '../components/ui/PageHeader'

export function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About"
        subtitle="Know the team, values, and engineering approach behind S.R ENTERPRISE'S."
      />
      <AboutSection />
      <VisionSection />
      <MissionSection />
      <FounderSection />
    </div>
  )
}


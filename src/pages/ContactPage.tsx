import { ContactSection } from '../components/sections/ContactSection'
import { PageHeader } from '../components/ui/PageHeader'

export function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact"
        subtitle="Share your requirements — we’ll respond with a clear plan and next steps."
      />
      <ContactSection />
    </div>
  )
}


import { Building2, ClipboardCheck, Home, Wrench } from 'lucide-react'
import { motion } from 'motion/react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const services = [
  {
    title: 'Residential Construction',
    description:
     "Custom homes, villas and residential buildings that combine durability, functionality and aesthetics.",
     Icon: Home,
  },
  {
    title: 'Commercial Construction',
    description:
      'Office spaces, retail outlets, and industrial facilities built to be  efficient, robust, and business-ready. ',
    Icon: Building2,
  },
  {
    title: 'Project Management',
    description:
      'End-to-end supervision including planning, budgeting, execution, and quality control for on-time, within-budget delivery.',
    Icon: ClipboardCheck,
  },
  {
    title: 'Renovation & Remodeling',
    description:
      "Custom homes, villas and residential buildings that combine durability, functionality and aesthetics.",
    Icon: Wrench,
  },
] as const

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[radial-gradient(circle_at_top,_#ffffff,_#f8f9fa,_#e9edf3)]"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <SectionHeading
          title="What Services Do We Provide?"
          subtitle="Complete construction solutions tailored to residential and commercial needs, backed by disciplined engineering and on-site execution."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.1}>
              <motion.div
                className="group overflow-hidden rounded-2xl bg-white/95 p-6 shadow-md shadow-black/[0.06] ring-1 ring-black/5 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-black/15 hover:ring-[var(--sr-accent)]/50"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-[var(--sr-accent)] to-[#ffc15a]" />
                <div className="mt-5 grid h-12 w-12 place-items-center rounded-full bg-[var(--sr-accent)] text-white shadow-sm shadow-black/10">
                  <s.Icon className="h-6 w-6" />
                </div>
                <div className="mt-4 font-heading text-[18px] font-bold text-[var(--sr-navy)] md:text-[20px]">
                  {s.title}
                </div>
                <p className="mt-2 text-[16px] text-[var(--sr-grey)]">{s.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


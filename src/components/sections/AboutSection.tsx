import { Calendar, MapPin, Award } from 'lucide-react'
import { motion } from 'motion/react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const highlights = [
  { title: 'Established', value: '2017', Icon: Calendar },
  { title: 'Location', value: 'Pune, Maharashtra', Icon: MapPin },
  { title: 'Expertise', value: 'Civil Engineering Leadership', Icon: Award },
] as const

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <SectionHeading
          title="About S.R ENTERPRISE'S"
          subtitle="Founded in 2017, S.R ENTERPRISE'S is a Pune-based construction company committed to delivering high-quality residential and commercial projects. Led by civil engineering expertise, we transform architectural concepts into strong, durable, and aesthetically appealing structures. We believe building a home should be as rewarding as living in one."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((h, idx) => (
            <Reveal key={h.title} delay={idx * 0.1}>
              <motion.div
                className="rounded-xl bg-white shadow-md shadow-black/5 ring-1 ring-black/5"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="h-1.5 w-full rounded-t-xl bg-[var(--sr-accent)]" />
                <div className="p-6 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[var(--sr-accent)]/[0.15] text-[var(--sr-accent)]">
                    <h.Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 font-heading text-[16px] font-semibold text-[var(--sr-navy)]">
                    {h.title}
                  </div>
                  <div className="mt-1 text-[16px] font-medium text-[var(--sr-grey)]">
                    {h.value}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


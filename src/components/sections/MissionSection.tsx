import { CheckCircle2, Clock, Shield } from 'lucide-react'
import { motion } from 'motion/react'
import { SectionHeading } from '../ui/SectionHeading'

const missions = [
  {
    title: 'Quality & Excellence',
    description:
      'Maintain strict quality control at every stage of construction to ensure superior workmanship and long-lasting results.',
    Icon: CheckCircle2,
  },
  {
    title: 'Timely & Cost-Efficient Delivery',
    description:
      'Complete projects on schedule and within budget through effective planning, project management, and resource optimization.',
    Icon: Clock,
  },
  {
    title: 'Safety & Responsibility',
    description:
      'Prioritize safety standards, ethical practices, and environmental responsibility in every project we undertake.',
    Icon: Shield,
  },
] as const

export function MissionSection() {
  return (
    <section id="mission" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <SectionHeading
          title="Our Mission"
          subtitle="A clear, execution-focused approach that keeps every project safe, efficient, and built to last."
        />

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative">
            <div className="absolute left-[22px] top-2 h-[calc(100%-8px)] w-1 rounded-full bg-[var(--sr-accent)]/[0.35]" />

            <div className="grid gap-8">
              {missions.map((m, idx) => (
                <motion.div
                  key={m.title}
                  className="relative pl-14"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: 'easeInOut', delay: idx * 0.1 }}
                >
                  <div className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full bg-[var(--sr-accent)] text-white shadow-md shadow-black/10">
                    <m.Icon className="h-5 w-5" />
                  </div>
                  <div className="rounded-xl bg-white p-6 shadow-md shadow-black/5 ring-1 ring-black/5">
                    <div className="font-heading text-[18px] font-bold text-[var(--sr-navy)] md:text-[20px]">
                      {m.title}
                    </div>
                    <p className="mt-2 text-[16px] text-[var(--sr-grey)]">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


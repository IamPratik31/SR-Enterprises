import { Lightbulb, Target } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const vision = [
  {
    number: '01',
    title: 'Client-Centric Excellence',
    description:
      'Exceed client expectations through superior quality, timely delivery, and complete transparency in every project.',
    Icon: Target,
  },
  {
    number: '02',
    title: 'Innovation & Sustainability',
    description:
      'Adopt advanced technologies, sustainable practices, and innovative engineering solutions for future-ready construction.',
    Icon: Lightbulb,
  },
] as const

export function VisionSection() {
  return (
    <section id="vision" className="bg-[var(--sr-bg)]">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <SectionHeading
          title="Our Vision"
          subtitle="To consistently exceed client expectations by delivering high-quality projects on time, within budget, and with complete transparency and professionalism."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {vision.map((v, idx) => (
            <Reveal key={v.number} delay={idx * 0.1} from={idx === 0 ? 'left' : 'right'}>
              <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-md shadow-black/5 ring-1 ring-black/5">
                <div className="absolute left-0 top-0 h-full w-1 bg-[var(--sr-accent)]" />

                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--sr-accent)]/[0.15] text-[var(--sr-accent)]">
                    <v.Icon className="h-6 w-6" />
                  </div>
                  <div className="rounded-full bg-[var(--sr-bg)] px-3 py-1 font-heading text-[14px] font-bold text-[var(--sr-navy)]">
                    {v.number}
                  </div>
                </div>

                <div className="mt-4 font-heading text-[18px] font-bold text-[var(--sr-navy)] md:text-[20px]">
                  {v.title}
                </div>
                <p className="mt-2 text-[16px] text-[var(--sr-grey)]">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


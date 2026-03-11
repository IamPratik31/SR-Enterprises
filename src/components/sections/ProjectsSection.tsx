import { ArrowRight, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const projects = [
  {
    name: 'Bungalow No. 290',
    location: 'Sindh Society, Aundh',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Balaji Villa',
    location: 'Bhugaon',
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Bhumkar House',
    location: 'Baner, Pune',
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Siddique House',
    location: 'Kiwale',
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Skyline Residency',
    location: 'Narhe, Pune',
    image:
      'https://images.unsplash.com/photo-1507086182422-97bd7ca2413b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Green Valley Bungalow',
    location: 'Wakad',
    image:
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=80',
  },
] as const

export function ProjectsSection({ compact = false }: { compact?: boolean }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const extendedProjects = projects.map((p) => ({
    ...p,
    images: [
      p.image,
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80',
    ],
  }))

  const activeProject =
    activeProjectIndex !== null ? extendedProjects[activeProjectIndex] : null

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <SectionHeading
          title="Our Projects"
          subtitle="A selection of residential projects showcasing ultra-modern design, premium finishes, and strong structural engineering across Pune and nearby areas."
        />

        <div className={`mt-10 grid gap-6 ${compact ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}>
          {extendedProjects.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.1}>
              <motion.div
                className="group overflow-hidden rounded-2xl bg-white shadow-md shadow-black/[0.08] ring-1 ring-black/5 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-black/20 hover:ring-[var(--sr-accent)]/50"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} - ${p.location}`}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--sr-navy)]/85 via-[var(--sr-navy)]/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="font-heading text-[18px] font-bold text-white md:text-[20px]">
                      {p.name}
                    </div>
                    <div className="mt-1 text-sm text-white/80">{p.location}</div>

                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveProjectIndex(idx)
                          setActiveImageIndex(0)
                        }}
                        className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2 font-heading text-[14px] font-semibold tracking-wide text-[var(--sr-navy)] shadow-md shadow-black/20 transition-transform duration-200 hover:scale-[1.03]"
                      >
                        View Details <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-8">
          <div className="relative mt-8 w-full max-w-4xl rounded-2xl bg-white shadow-2xl md:mt-0 md:max-h-[90vh] md:overflow-hidden">
            <button
              type="button"
              onClick={() => setActiveProjectIndex(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
              aria-label="Close details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-6 p-5 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:p-7">
              <div>
                <div className="overflow-hidden rounded-xl bg-black/5">
                  <img
                    src={activeProject.images[activeImageIndex]}
                    alt={`${activeProject.name} view ${activeImageIndex + 1}`}
                    className="h-64 w-full object-cover md:h-80"
                  />
                </div>

                <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                  {activeProject.images.map((img, index) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-20 min-w-[110px] overflow-hidden rounded-lg border-2 ${
                        index === activeImageIndex
                          ? 'border-yellow-400'
                          : 'border-transparent opacity-70'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${activeProject.name} thumbnail ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4">
                <div>
                  <div className="font-heading text-[20px] font-bold text-[var(--sr-navy)] md:text-[22px]">
                    {activeProject.name}
                  </div>
                  <div className="mt-1 text-[15px] font-medium text-[var(--sr-grey)]">
                    {activeProject.location}
                  </div>
                  <p className="mt-3 text-[15px] text-[var(--sr-grey)]">
                    Scroll through multiple views of this project to see the elevation, façade and
                    overall structure. Tap any image to focus and view it in more detail.
                  </p>
                  <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.18em] text-yellow-500">
                    Image {activeImageIndex + 1} of {activeProject.images.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


 import { ArrowRight, X } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { SectionHeading } from "../ui/SectionHeading"
import { Reveal } from "../ui/Reveal"

const projects = [
  {
    name: "Bungalow No. 290",
    location: "Sindh Society, Aundh",
    description:
      "A modern luxury bungalow with spacious rooms, premium elevation design, and strong RCC structure built with high-quality materials.",
    images: [
      "/image/project1.0.jfif",
      "/image/project1.1.jfif",
       
    ],
  },
  {
    name: "Balaji Villa",
    location: "Bhugaon, Pune",
    description:
      "Balaji Villa is designed with modern architecture, large windows for natural light, and elegant exterior finishing.",
    images: [
      "public/image/project2.0.jfif",
      "public/image/project2.1.jfif",
    
    ],
  },
  {
    name: "Bhumkar House",
    location: "Baner, Pune",
    description:
      "A stylish residential house designed with modern elevation and strong structural engineering suitable for urban living.",
    images: [
      "public/image/project3.1.jfif",
      "public/image/project3.2.jfif",
    
    ],
  },
  
  {
    name: "Siddique House",
    location: "Kiwale Ravet, Pune",
    description:
      "A beautiful family home with elegant façade design, spacious interior planning, and durable construction quality.",
    images: [
      "public/image/project4.0.jfif",
      "public/image/project4.1.jfif",
       
    ],
  },
  {
    name: "kamthe house",
    location: "Gokul Nagar katraj, Pune",
    description:
      "Kamthe House is a modern residential building with an attractive design and strong construction. It provides comfortable living space with good ventilation, making it ideal for family living.",
        
    
      images: [
      "public/image/project5.0.jfif",
      "public/image/project5.1.jfif",
    ],
  },
  {
    name: "Parag Satpute Villa ",
    location: "Bhugaon, Pune",
    description:
      " Parag Satpute Villa is a beautiful bungalow project built with strong structure and modern design. The project offers a spacious layout and quality construction",
    images: [
      "public/image/project6.0.jfif",
      "public/image/project6.1.jfif",
      "public/image/project6.2.jfif",
    ],
  },
]

export function ProjectsSection({ compact = false }: { compact?: boolean }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const activeProject =
    activeProjectIndex !== null ? projects[activeProjectIndex] : null

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <SectionHeading
          title="Our Projects"
          subtitle="A selection of residential projects showcasing ultra-modern design, premium finishes, and strong structural engineering across Pune and nearby areas."
        />

        <div className={`mt-10 grid gap-6 ${compact ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
          {projects.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.1}>
              <motion.div
                className="group overflow-hidden rounded-2xl bg-white shadow-md shadow-black/[0.08] ring-1 ring-black/5 hover:shadow-xl hover:ring-yellow-400/40"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={`${p.name} - ${p.location}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-[20px] font-bold text-white">
                      {p.name}
                    </div>

                    <div className="text-sm text-white/80">
                      {p.location}
                    </div>

                    <div className="mt-4">
                      <button
                        onClick={() => {
                          setActiveProjectIndex(idx)
                          setActiveImageIndex(0)
                        }}
                        className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black shadow-md hover:scale-[1.03]"
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

          <div className="relative mt-8 w-full max-w-4xl rounded-2xl bg-white shadow-2xl">

            <button
              onClick={() => setActiveProjectIndex(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-6 p-6 md:grid-cols-[1.6fr_1fr]">

              <div>

                <div className="overflow-hidden rounded-xl">
                  <img
                    src={activeProject.images[activeImageIndex]}
                    className="h-72 w-full object-cover"
                  />
                </div>

                <div className="mt-4 flex gap-3 overflow-x-auto">

                  {activeProject.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-20 min-w-[110px] overflow-hidden rounded-lg border-2 ${
                        index === activeImageIndex
                          ? "border-yellow-400"
                          : "border-transparent opacity-70"
                      }`}
                    >
                      <img
                        src={img}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}

                </div>

              </div>

              <div>

                <div className="text-[22px] font-bold text-gray-900">
                  {activeProject.name}
                </div>

                <div className="text-gray-500">
                  {activeProject.location}
                </div>

                <p className="mt-4 text-gray-600">
                  {activeProject.description}
                </p>

                <p className="mt-4 text-sm text-yellow-500 font-medium">
                  Image {activeImageIndex + 1} of {activeProject.images.length}
                </p>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  )
}
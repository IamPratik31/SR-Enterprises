import { motion } from 'motion/react'
import { ChevronDown, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const PHONE = '9665352211'

// Hero background image (use your own file at public/hero.png)
const HERO_IMAGE = 'public/image/Picture1.png'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Construction site background"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[var(--sr-navy)]/[0.85]" />
      </div>

      {/* Subtle background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-white/[0.06] blur-2xl" />
        <div className="absolute -right-28 bottom-28 h-72 w-72 rounded-full bg-[var(--sr-accent)]/[0.12] blur-2xl" />
      </div>

      <div className="relative mx-auto flex min-h-[100vh] max-w-[1280px] items-center px-6 py-20">
        <div className="w-full">
          <div className="flex justify-center">
            <div className="max-w-2xl text-center md:text-left">
              <motion.h1
                className="font-heading text-[28px] font-bold leading-tight tracking-wide text-white md:text-[52px] lg:text-[56px]"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                S.R ENTERPRISE&apos;S
              </motion.h1>
              <motion.p
                className="mt-4 text-[16px] text-white/85 md:text-[18px]"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
              >
                Engineering Dreams. Building Reality.
              </motion.p>

              <motion.a
                href={`tel:${PHONE}`}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.15] bg-white/10 px-4 py-3 text-white/90 backdrop-blur transition-all duration-300 ease-in-out hover:bg-white/[0.15] md:justify-start"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--sr-accent)]/[0.2] text-[var(--sr-accent)]">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="font-heading text-[14px] font-semibold tracking-wide">
                  {PHONE}
                </span>
              </motion.a>

              <motion.div
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Link
                    to="/projects"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[var(--sr-accent)] px-6 py-3 font-heading text-[14px] font-semibold uppercase tracking-wide text-white shadow-md shadow-black/20"
                  >
                    VIEW PROJECTS
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border-2 border-white/80 px-6 py-3 font-heading text-[14px] font-semibold uppercase tracking-wide text-white transition-all duration-300 ease-in-out hover:border-white hover:bg-white/10"
                  >
                    CONTACT US
                  </Link>
                </motion.div>
              </motion.div>
            </div>

          </div>

          {/* Scroll indicator */}
          <motion.a
            href="#services"
            className="absolute bottom-7 left-1/2 inline-flex -translate-x-1/2 flex-col items-center gap-2 text-white/75"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-wide">Scroll</span>
            <ChevronDown className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}


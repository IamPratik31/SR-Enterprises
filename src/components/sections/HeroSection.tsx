 import { motion } from "framer-motion"
import { ChevronDown, Phone } from "lucide-react"
import { Link } from "react-router-dom"

const PHONE = "9665352211"
const HERO_IMAGE = "/image/Picture1.png"

export function HeroSection() {
return (
<section id="home" className="relative min-h-[100vh] overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0">
    <img
      src={HERO_IMAGE}
      alt="Construction background"
      className="h-full w-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-[var(--sr-navy)]/80" />
  </div>

  {/* Content */}
  <div className="relative mx-auto flex min-h-[100vh] max-w-[1280px] items-center px-6 py-20">

    <div className="w-full flex justify-center">

      <div className="max-w-3xl text-center md:text-left">

        {/* Logo + Company Name */}
        <motion.div
          className="flex flex-col items-center md:flex-row md:items-center md:gap-4 md:justify-start"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >

          <img
            src="/image/logo.jfif"
            alt="SR Enterprises Logo"
            className="h-20 w-20 object-contain mb-3 md:mb-0"
          />

          <h1 className="font-heading text-[28px] font-bold tracking-wide text-white md:text-[52px] lg:text-[56px]">
            S.R ENTERPRISE&apos;S
          </h1>

        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mt-3 text-[16px] text-white/85 md:text-[18px]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Engineering Dreams. Building Reality.
        </motion.p>

        {/* Phone */}
        <motion.a
          href={`tel:${PHONE}`}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur hover:bg-white/20 md:justify-start"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-400/20 text-yellow-400">
            <Phone className="h-5 w-5" />
          </span>

          <span className="font-semibold tracking-wide">
            {PHONE}
          </span>
        </motion.a>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/projects"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-yellow-500 px-6 py-3 font-semibold uppercase tracking-wide text-white shadow-lg"
            >
              VIEW PROJECTS
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-white px-6 py-3 font-semibold uppercase tracking-wide text-white hover:bg-white/10"
            >
              CONTACT US
            </Link>
          </motion.div>

        </motion.div>

      </div>

    </div>

    {/* Scroll Indicator */}
    <motion.a
      href="#services"
      className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 1.3, repeat: Infinity }}
    >
      <span className="text-xs tracking-wide">Scroll</span>
      <ChevronDown className="h-6 w-6" />
    </motion.a>

  </div>

</section>

)
}
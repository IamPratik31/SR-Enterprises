import { motion } from 'motion/react'

export function PageHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--sr-navy)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/[0.06] blur-2xl" />
        <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-[var(--sr-accent)]/[0.14] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-14 md:py-16">
        <motion.h1
          className="font-heading text-[28px] font-bold tracking-wide text-white md:text-[48px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            className="mt-3 max-w-2xl text-white/80"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>
    </section>
  )
}


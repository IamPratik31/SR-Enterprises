import { motion } from 'motion/react'

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
}: {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      <motion.h2
        className="font-heading text-[22px] font-bold text-[var(--sr-navy)] md:text-[32px] lg:text-[36px]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="h-1 w-16 rounded-full bg-[var(--sr-accent)]"
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.05 }}
      />
      {subtitle ? (
        <motion.p
          className="max-w-2xl text-[16px] text-[var(--sr-grey)]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}


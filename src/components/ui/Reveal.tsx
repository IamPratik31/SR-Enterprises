import type { ReactNode } from 'react'
import { motion } from 'motion/react'

export function Reveal({
  children,
  delay = 0,
  from = 'bottom',
}: {
  children: ReactNode
  delay?: number
  from?: 'bottom' | 'left' | 'right'
}) {
  const initial =
    from === 'left'
      ? { opacity: 0, x: -18 }
      : from === 'right'
        ? { opacity: 0, x: 18 }
        : { opacity: 0, y: 18 }

  const animate =
    from === 'left' || from === 'right'
      ? { opacity: 1, x: 0 }
      : { opacity: 1, y: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  )
}


import { motion } from 'motion/react'
import { MessageCircle, Phone } from 'lucide-react'

const PHONE = '9665352211'
const WHATSAPP_LINK =
  'https://wa.me/919665352211?text=Hello!%20I%20would%20like%20to%20discuss%20a%20construction%20project.'

export function FloatingActions() {
  return (
    <>
      {/* Sticky call button (mobile only) */}
      <motion.a
        href={`tel:${PHONE}`}
        className="md:hidden fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[var(--sr-accent)] px-5 py-3 font-heading text-[14px] font-semibold uppercase tracking-wide text-white shadow-lg shadow-black/[0.15]"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut', delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Call now"
      >
        <Phone className="h-5 w-5" />
        CALL NOW
      </motion.a>

      {/* WhatsApp button (all devices) */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut', delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </>
  )
}


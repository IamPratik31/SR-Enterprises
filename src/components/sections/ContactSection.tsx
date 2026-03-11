import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { motion } from 'motion/react'
import { useMemo, useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const PHONE_NUMBER = '9665352211'
const EMAIL = 'sunilrathod1087@gmail.com'
const ADDRESS = 'DURVANKUR SRISHTI, Narhe, Pune, Maharashtra 411041'

export function ContactSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !message.trim()) return
    alert('Thanks! We received your message and will get back to you soon.')
    setName('')
    setPhone('')
    setMessage('')
  }

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <SectionHeading
          title="Let's Build Something Exceptional Together"
          subtitle="We welcome new project inquiries and collaborations. Share your requirements and let’s turn your vision into a strong, well-built reality."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="order-1 grid gap-6 lg:order-1">
            <Reveal delay={0.1} from="right">
              <div className="rounded-xl bg-[var(--sr-bg)] p-6 shadow-md shadow-black/5 ring-1 ring-black/5">
                <div className="grid gap-4">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="group flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-black/5 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/10"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--sr-accent)] text-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-heading text-[14px] font-semibold text-[var(--sr-navy)]">
                        Phone
                      </div>
                      <div className="text-[16px] text-[var(--sr-grey)] group-hover:text-[var(--sr-navy)]">
                        {PHONE_NUMBER}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="group flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-black/5 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/10"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--sr-accent)] text-white">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-heading text-[14px] font-semibold text-[var(--sr-navy)]">
                        Email
                      </div>
                      <div className="truncate text-[16px] text-[var(--sr-grey)] group-hover:text-[var(--sr-navy)]">
                        {EMAIL}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-black/5">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--sr-accent)] text-white">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-heading text-[14px] font-semibold text-[var(--sr-navy)]">
                        Address
                      </div>
                      <div className="text-[16px] text-[var(--sr-grey)]">{ADDRESS}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} from="right">
              <div className="rounded-xl bg-[var(--sr-navy)] p-6 text-white shadow-md shadow-black/[0.12] ring-1 ring-black/10">
                <div className="font-heading text-[16px] font-semibold uppercase tracking-[0.22em] text-yellow-300">
                  Why Clients Choose Us
                </div>
                <ul className="mt-3 space-y-2 text-[14px]">
                  <li>• Clear site supervision and engineering-focused execution.</li>
                  <li>• Transparent communication from planning to handover.</li>
                  <li>• Residential &amp; villa projects across Pune and nearby areas.</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="order-2 lg:order-2">
            <Reveal>
              <form
                onSubmit={onSubmit}
                className="rounded-xl bg-[var(--sr-bg)] p-6 shadow-md shadow-black/5 ring-1 ring-black/5 md:p-8"
              >
                <div className="grid gap-4">
                  <div>
                    <label className="font-heading text-[14px] font-semibold text-[var(--sr-navy)]">
                      Name <span className="text-[var(--sr-accent)]">*</span>
                    </label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[16px] outline-none transition-all duration-300 ease-in-out focus:border-[var(--sr-accent)] focus:ring-4 focus:ring-[var(--sr-accent)]/20"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="font-heading text-[14px] font-semibold text-[var(--sr-navy)]">
                      Phone Number <span className="text-[var(--sr-accent)]">*</span>
                    </label>
                    <input
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[16px] outline-none transition-all duration-300 ease-in-out focus:border-[var(--sr-accent)] focus:ring-4 focus:ring-[var(--sr-accent)]/20"
                      placeholder="e.g. 9665352211"
                      inputMode="tel"
                    />
                  </div>

                  <div>
                    <label className="font-heading text-[14px] font-semibold text-[var(--sr-navy)]">
                      Message <span className="text-[var(--sr-accent)]">*</span>
                    </label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-[16px] outline-none transition-all duration-300 ease-in-out focus:border-[var(--sr-accent)] focus:ring-4 focus:ring-[var(--sr-accent)]/20"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[var(--sr-accent)] px-6 py-3 font-heading text-[14px] font-semibold uppercase tracking-wide text-white shadow-md shadow-black/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <Send className="h-4 w-4" />
                    SEND MESSAGE
                  </motion.button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}


import { Mail, MapPin, Phone } from 'lucide-react'

const PHONE = '9665352211'
const EMAIL = 'sunilrathod1087@gmail.com'
const ADDRESS = 'DURVANKUR SRISHTI, Narhe, Pune, Maharashtra 411041'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--sr-navy)] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/80 md:flex-row md:text-left">
          <div>
            <div className="font-heading text-[16px] font-bold tracking-wide text-[var(--sr-accent)]">
              S.R ENTERPRISE&apos;S
            </div>
            <div className="mt-1">
              Engineering Dreams. Building Reality.
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2 md:justify-end">
              <Phone className="h-4 w-4" />
              <a href={`tel:${PHONE}`} className="hover:text-[var(--sr-accent)]">
                {PHONE}
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 md:justify-end">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${EMAIL}`} className="hover:text-[var(--sr-accent)]">
                {EMAIL}
              </a>
            </div>
            <div className="flex items-start justify-center gap-2 md:justify-end">
              <MapPin className="mt-0.5 h-4 w-4" />
              <span>{ADDRESS}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-white/60">
          © {year} S.R ENTERPRISE&apos;S. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


import { SectionHeading } from '../ui/SectionHeading'

// Founder image (place file at: public/images/founder.jpg)
const FOUNDER_IMAGE = '/images/founder.jpg'

export function FounderSection() {
  return (
    <section id="leadership" className="bg-[var(--sr-bg)]">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <SectionHeading
          title="Leadership"
          subtitle="Simple and focused leadership information for S.R ENTERPRISE&apos;S."
        />

        <div className="mx-auto mt-10 max-w-xl">
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg shadow-black/[0.12] ring-1 ring-black/5">
            <div className="mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full border-2 border-[var(--sr-accent)] bg-[var(--sr-bg)]">
              <img
                src={"public/image/pic of founder.png"}
                alt="Founder portrait"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="inline-flex items-center justify-center rounded-full bg-[var(--sr-bg)] px-5 py-2 font-heading text-[12px] font-semibold uppercase tracking-wide text-[var(--sr-navy)]">
              Founder
            </div>
            <div className="mt-4 font-heading text-[24px] font-bold text-[var(--sr-navy)] md:text-[28px]">
              ER Sunil Rathod
            </div>
            <div className="mt-1 text-[16px] font-medium text-[var(--sr-grey)]">
              B.E Civil Engineering
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import { motion } from 'motion/react'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const PHONE = '9665352211'

// Logo image (place file at: public/images/logo.png)
const LOGO_IMAGE = 'public/image/logo.jfif'

type NavItem = { label: string; to: string }

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Contact', to: '/contact' },
    ],
    [],
  )

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/[0.85] backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="group inline-flex items-center gap-2"
          onClick={() => setOpen(false)}
          aria-label="S.R ENTERPRISE'S home"
        >
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-black shadow-sm">
            <img
              src={LOGO_IMAGE}
              alt="S.R ENTERPRISE'S logo"
              className="h-full w-full object-contain"
            />
          </span>
          <div className="leading-tight">
            <div className="font-heading text-[15px] font-bold tracking-wide text-[var(--sr-navy)] md:text-[16px]">
              S.R ENTERPRISE'S
            </div>
            <div className="text-[12px] text-[var(--sr-grey)]">
              Engineering Dreams. Building Reality.
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-xl px-4 py-2 font-heading text-[14px] font-semibold tracking-wide transition-all duration-300 ease-in-out',
                  isActive
                    ? 'bg-[var(--sr-bg)] text-[var(--sr-navy)]'
                    : 'text-[var(--sr-grey)] hover:bg-[var(--sr-bg)] hover:text-[var(--sr-navy)]',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'rounded-xl px-4 py-3 font-heading text-[14px] font-semibold tracking-wide transition-all duration-300 ease-in-out',
                      isActive
                        ? 'bg-[var(--sr-bg)] text-[var(--sr-navy)]'
                        : 'text-[var(--sr-grey)] hover:bg-[var(--sr-bg)] hover:text-[var(--sr-navy)]',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function tryScrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return true
}

export function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash?.replace('#', '').trim()
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (tryScrollToId(hash)) return

    // If the section isn't mounted yet (route change),
    // retry a few times to allow layout to render.
    let tries = 0
    const timer = window.setInterval(() => {
      tries += 1
      if (tryScrollToId(hash) || tries > 12) window.clearInterval(timer)
    }, 50)
    return () => window.clearInterval(timer)
  }, [location.pathname, location.hash])

  return null
}


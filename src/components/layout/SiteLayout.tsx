import { Outlet } from 'react-router-dom'
import { ScrollToHash } from '../ScrollToHash'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function SiteLayout() {
  return (
    <div className="min-h-dvh bg-white">
      <ScrollToHash />
      <Navbar />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
   
    </div>
  )
}


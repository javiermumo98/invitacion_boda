import { useState, useEffect } from 'react'
import Cover from './components/Cover.jsx'
import Welcome from './components/Welcome.jsx'
import Countdown from './components/Countdown.jsx'
import Places from './components/Places.jsx'
import Trayecto from './components/Trayecto.jsx'
import DressCode from './components/DressCode.jsx'
import RSVP from './components/RSVP.jsx'
import Contact from './components/Contact.jsx'
import AudioToggle from './components/AudioToggle.jsx'
import TweaksPanel from './components/TweaksPanel.jsx'

const TWEAK_DEFAULTS = {
  palette: '#7a8a9c',
  script: 'parisienne',
  ornaments: 'soft',
  theme: 'light',
  coverCopy: 'a',
}

export default function App() {
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS)
  const [coverOpen, setCoverOpen] = useState(false)

  useEffect(() => {
    if (!coverOpen) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [coverOpen])

  function applyTweak(edits) {
    setTweaks(prev => ({ ...prev, ...edits }))
  }

  return (
    <div
      data-theme={tweaks.theme}
      data-script={tweaks.script}
      data-orn={tweaks.ornaments}
      style={{ '--leaf': tweaks.palette }}
    >
      <Cover
        open={coverOpen}
        onOpen={() => setCoverOpen(true)}
        coverCopy={tweaks.coverCopy}
      />
      <main className="page" id="page">
        <Welcome />
        <Countdown />
        <Places />
        <Trayecto />
        <DressCode />
        <RSVP />
        <Contact />
        <div className="foot">
          <span className="amp">Á &amp; J</span>
          Con amor · 4 · VII · 2026
        </div>
      </main>
      <AudioToggle />
      <TweaksPanel tweaks={tweaks} onTweak={applyTweak} />
    </div>
  )
}

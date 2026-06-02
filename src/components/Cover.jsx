import { useEffect, useRef } from 'react'

const COPY = {
  a: 'Nos casamos',
  b: 'Save the date',
  c: 'Una invitación',
}

export default function Cover({ open, onOpen, coverCopy }) {
  const coverRef = useRef(null)
  const touchStartY = useRef(null)

  useEffect(() => {
    if (!open) {
      document.body.style.overflowY = 'hidden'
      document.documentElement.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
      document.documentElement.style.overflowY = 'auto'
    }
  }, [open])

  useEffect(() => {
    const el = coverRef.current
    if (!el || open) return

    function onTouchStart(e) {
      touchStartY.current = e.touches[0].clientY
    }
    function onTouchMove(e) {
      e.preventDefault()
    }
    function onTouchEnd(e) {
      if (touchStartY.current == null) return
      const dy = touchStartY.current - e.changedTouches[0].clientY
      if (dy > 40) onOpen()
      touchStartY.current = null
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [open, onOpen])

  if (open) return null

  return (
    <div className="cover" id="cover" ref={coverRef}>
      <div className="cover-inner">
        <div className="leaves" />
        <div className="meta">{COPY[coverCopy] || COPY.a}</div>
        <h1 className="names">
          <span className="line1">Ángela</span>
          <span className="line2"><span className="ampersand">y</span> Javier</span>
        </h1>
        <div className="date">4 · JULIO · 2026</div>
        <button className="open-btn" id="openBtn" onClick={onOpen}>Abrir invitación</button>
        <div className="hint">Desliza hacia arriba</div>
      </div>
    </div>
  )
}

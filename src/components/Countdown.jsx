import { useState, useEffect } from 'react'

const WEDDING = new Date('2026-07-04T19:00:00+02:00')

function getTimeLeft() {
  const diff = Math.max(0, WEDDING - new Date())
  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  const pad = n => String(n).padStart(2, '0')
  return { d: pad(d), h: pad(h), m: pad(m), s: pad(s) }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="block countdown">
      <div className="overline reveal">Cuenta atrás</div>
      <h2 className="title reveal">Cada día más cerca</h2>
      <div className="count-grid reveal" id="countGrid">
        <div className="count-cell">
          <div className="count-num">{time.d}</div>
          <div className="count-lab">Días</div>
        </div>
        <div className="count-cell">
          <div className="count-num">{time.h}</div>
          <div className="count-lab">Horas</div>
        </div>
        <div className="count-cell">
          <div className="count-num">{time.m}</div>
          <div className="count-lab">Min</div>
        </div>
        <div className="count-cell">
          <div className="count-num">{time.s}</div>
          <div className="count-lab">Seg</div>
        </div>
      </div>
    </section>
  )
}

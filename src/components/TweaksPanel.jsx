import { useState, useEffect } from 'react'

const PALETTES = [
  { value: '#9fa987', label: 'Salvia' },
  { value: '#b69a64', label: 'Dorado' },
  { value: '#c8a2a2', label: 'Rosa empolvado' },
  { value: '#7a8a9c', label: 'Azul polvo' },
  { value: '#3a3a38', label: 'Neutro' },
]

const SCRIPTS = [
  { value: 'parisienne', label: 'Parisienne' },
  { value: 'dancing', label: 'Dancing' },
  { value: 'vibes', label: 'Great Vibes' },
]

const THEMES = [
  { value: 'light', label: 'Claro' },
  { value: 'dark', label: 'Oscuro' },
]

const COPIES = [
  { value: 'a', label: 'Nos casamos' },
  { value: 'b', label: 'Save the date' },
  { value: 'c', label: 'Una invitación' },
]

export default function TweaksPanel({ tweaks, onTweak }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onMessage(e) {
      const d = e.data || {}
      if (d.type === '__activate_edit_mode') setVisible(true)
      if (d.type === '__deactivate_edit_mode') setVisible(false)
    }
    window.addEventListener('message', onMessage)
    window.parent.postMessage({ type: '__edit_mode_available' }, '*')
    return () => window.removeEventListener('message', onMessage)
  }, [])

  function applyTweak(edits) {
    onTweak(edits)
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*')
  }

  if (!visible) return null

  return (
    <div className={`tweaks${visible ? ' show' : ''}`} id="tweaks">
      <header>
        <span>Tweaks</span>
        <button id="twClose" aria-label="Cerrar" onClick={() => setVisible(false)}>×</button>
      </header>
      <div className="tw-body">
        <div className="tw-row">
          <label>Paleta</label>
          <div className="swatches" id="swPalette">
            {PALETTES.map(p => (
              <button
                key={p.value}
                data-leaf={p.value}
                style={{ background: p.value }}
                title={p.label}
                className={tweaks.palette === p.value ? 'active' : ''}
                onClick={() => applyTweak({ palette: p.value })}
              />
            ))}
          </div>
        </div>
        <div className="tw-row">
          <label>Tipografía script</label>
          <div className="opts" id="swScript">
            {SCRIPTS.map(s => (
              <button
                key={s.value}
                data-val={s.value}
                className={tweaks.script === s.value ? 'active' : ''}
                onClick={() => applyTweak({ script: s.value })}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
        <div className="tw-row">
          <label>Modo</label>
          <div className="opts" id="swTheme">
            {THEMES.map(t => (
              <button
                key={t.value}
                data-val={t.value}
                className={tweaks.theme === t.value ? 'active' : ''}
                onClick={() => applyTweak({ theme: t.value })}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className="tw-row">
          <label>Copy de portada</label>
          <div className="opts" id="swCopy">
            {COPIES.map(c => (
              <button
                key={c.value}
                data-val={c.value}
                className={tweaks.coverCopy === c.value ? 'active' : ''}
                onClick={() => applyTweak({ coverCopy: c.value })}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

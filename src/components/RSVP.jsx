import { useState, useEffect } from 'react'

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxyYOObESo82qjWNMp1uhr-4dq8wCumGjujjW7NX11rflOQH-QzCs4prJjLBxK0r0a7/exec'

const INITIAL = {
  nombre: '',
  telefono: '',
  attend: '',
  acompanantes: '',
  bus: '',
  personas_bus: '0',
  menores: '0',
  notas: '',
}

export default function RSVP() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const attending = form.attend === 'si'
  const maxPersonas = parseInt(form.acompanantes) || 7

  useEffect(() => {
    if (parseInt(form.personas_bus) > maxPersonas) setForm(f => ({ ...f, personas_bus: '0' }))
    if (parseInt(form.menores) > maxPersonas) setForm(f => ({ ...f, menores: '0' }))
  }, [form.acompanantes, maxPersonas])

  function set(field, value) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.nombre.trim()) { alert('Por favor, introduce tu nombre completo.'); return }
    if (!form.telefono.trim()) { alert('Por favor, introduce tu número de teléfono.'); return }
    if (!form.attend) { alert('Por favor, indica si asistirás.'); return }
    if (attending && !form.acompanantes) { alert('Por favor, indica cuántas personas asistirán.'); return }
    if (attending && !form.bus) { alert('Por favor, indica si usarás el autobús.'); return }
    setSubmitting(true)
    const data = {
      nombre: form.nombre,
      telefono: form.telefono,
      attend: form.attend,
      acompanantes: form.acompanantes || '1',
      bus: form.bus,
      personas_bus: form.personas_bus,
      menores: form.menores,
      notas: form.notas,
    }
    try {
      await fetch(SHEETS_URL + '?' + new URLSearchParams(data).toString(), { mode: 'no-cors' })
    } catch (_) {}
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="block rsvp" id="rsvp">
        <div className="thanks show" id="thanks">
          <h3>¡Gracias!</h3>
          <p className="body-text" style={{ margin: '8px auto 0' }}>
            Hemos anotado tu respuesta.<br />Nos vemos el 4 de julio.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="block rsvp" id="rsvp">
      <div className="overline reveal">Confirma tu asistencia</div>
      <h2 className="title reveal">¿Vendrás?</h2>
      <p className="body-text reveal">
        Nos encantaría contar contigo. Confírmanos antes del <b style={{ fontWeight: 500 }}>15 de junio</b>.
      </p>
      <form className="form-wrap reveal" id="rsvpForm" autoComplete="off" onSubmit={handleSubmit}>
        <div className="field">
          <label>Nombre completo</label>
          <input type="text" name="nombre" required placeholder="Tu nombre"
            value={form.nombre} onChange={e => set('nombre', e.target.value)} />
        </div>
        <div className="field">
          <label>Número de teléfono</label>
          <input type="tel" name="telefono" required placeholder="Tu número de teléfono"
            value={form.telefono} onChange={e => set('telefono', e.target.value)} />
        </div>
        <div className="field">
          <label>¿Asistirás?</label>
          <div className="seg" role="radiogroup">
            <button type="button" data-attend="si"
              className={form.attend === 'si' ? 'active' : ''}
              onClick={() => set('attend', 'si')}>
              Sí, allí estaré
            </button>
            <button type="button" data-attend="no"
              className={form.attend === 'no' ? 'active' : ''}
              onClick={() => set('attend', 'no')}>
              No podré
            </button>
          </div>
        </div>
        {attending && (
          <>
            <div className="field" id="moreFields">
              <label>¿Cuántas personas asistirán? (incluyéndote a ti)</label>
              <select name="acompanantes" value={form.acompanantes} onChange={e => set('acompanantes', e.target.value)}>
                <option value="">— selecciona —</option>
                {[1,2,3,4,5,6,7].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div className="field" id="busField">
              <label>¿Usarás el autobús?</label>
              <div className="seg" role="radiogroup">
                <button type="button" data-bus="hinojosa"
                  className={form.bus === 'hinojosa' ? 'active' : ''}
                  onClick={() => set('bus', 'hinojosa')}>
                  Hinojosa · 18:10
                </button>
                <button type="button" data-bus="belalcazar"
                  className={form.bus === 'belalcazar' ? 'active' : ''}
                  onClick={() => set('bus', 'belalcazar')}>
                  Belalcázar · tras ceremonia
                </button>
                <button type="button" data-bus="no"
                  className={form.bus === 'no' ? 'active' : ''}
                  onClick={() => set('bus', 'no')}>
                  No lo usaré
                </button>
              </div>
            </div>
            <div className="field" id="busCountField">
              <label>¿Cuántas personas de tu familia usarán el autobús? (incluyéndote a ti)</label>
              <select name="personas_bus" value={form.personas_bus} onChange={e => set('personas_bus', e.target.value)}>
                {Array.from({ length: maxPersonas + 1 }, (_, i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
            <div className="field" id="menoresField">
              <label>¿Cuántos asistentes de tu familia son menores de 14 años?</label>
              <small style={{ color: 'var(--muted)', fontSize: '.82em', marginTop: -6, display: 'block' }}>
                Los menores de 14 disfrutarán de menú infantil; a partir de 14, menú de adulto.
              </small>
              <select name="menores" value={form.menores} onChange={e => set('menores', e.target.value)}>
                {Array.from({ length: maxPersonas + 1 }, (_, i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
          </>
        )}
        <div className="field">
          <label>Alergias o notas</label>
          <textarea name="notas" placeholder="Algo que debamos saber (opcional)"
            value={form.notas} onChange={e => set('notas', e.target.value)} />
        </div>
        <button className="submit" type="submit" disabled={submitting}>
          {submitting ? 'Enviando…' : 'Confirmar'}
        </button>
      </form>
    </section>
  )
}

const BusIcon = () => (
  <svg viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="26" height="14" rx="2" />
    <path d="M3 10h26" />
    <circle cx="9" cy="20" r="2" />
    <circle cx="23" cy="20" r="2" />
    <path d="M6 7h6M20 7h6" />
  </svg>
)

export default function Trayecto() {
  return (
    <section className="block trayecto">
      <div className="overline reveal">Cómo llegar</div>
      <h2 className="title reveal">El trayecto</h2>
      <p className="body-text reveal" style={{ marginBottom: 8 }}>
        Habrá servicio de autobús hasta el Complejo Rural El Soldado.
      </p>
      <div className="trayecto-grid">
        <div className="route reveal" role="img" aria-label="Mapa ilustrado del trayecto">
          <img
            src="./route-map.jpg"
            alt="Mapa ilustrado del trayecto"
            style={{ width: '100%', height: 'auto', borderRadius: 8 }}
          />
        </div>
        <div className="bus-stops">
          <div className="bus-stop reveal">
            <div className="ico" aria-hidden="true"><BusIcon /></div>
            <div>
              <div className="town">Hinojosa del Duque</div>
              <div className="where">Estación de autobuses</div>
            </div>
            <div className="hr">18:10</div>
          </div>
          <div className="bus-stop reveal">
            <div className="ico" aria-hidden="true"><BusIcon /></div>
            <div>
              <div className="town">Belalcázar</div>
              <div className="where">Plaza del Mercado · C. del Padre Torrero, 44</div>
            </div>
            <div className="hr hr-note">Tras la<br />ceremonia</div>
          </div>
        </div>
      </div>
      <p className="body-text reveal" style={{ marginTop: 22, fontStyle: 'italic' }}>
        Por favor, avísanos en el RSVP si vas a usar el autobús.
      </p>
    </section>
  )
}

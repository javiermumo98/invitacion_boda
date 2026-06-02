export default function Places() {
  return (
    <section className="block places">
      <div className="overline reveal">Sábado · 4 de julio · 2026</div>
      <h2 className="title reveal">El gran día</h2>
      <div className="venues-grid">
        <div className="venue reveal" style={{ marginTop: 28 }}>
          <div className="kicker">Ceremonia</div>
          <div className="time">19:00 h</div>
          <h3 className="name">Parroquia de Santiago el Mayor</h3>
          <p className="addr">Pl. de los Mártires, S/N · Belalcázar</p>
          <a
            className="map-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/search/?api=1&query=Parroquia+de+Santiago+el+Mayor+Belalc%C3%A1zar"
          >
            Cómo llegar
          </a>
        </div>
        <div className="venue reveal">
          <div className="kicker">Celebración</div>
          <div className="time">A continuación</div>
          <h3 className="name">Complejo Rural El Soldado</h3>
          <p className="addr">Ctra. El Soldado, km 2 · Villanueva del Duque</p>
          <a
            className="map-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/search/?api=1&query=Complejo+Rural+El+Soldado+Villanueva+del+Duque"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  )
}

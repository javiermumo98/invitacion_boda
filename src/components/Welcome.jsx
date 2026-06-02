export default function Welcome() {
  return (
    <section className="block welcome">
      <div className="overline reveal">Save the date</div>
      <h2 className="names-big reveal">Ángela <i>y</i> Javier</h2>
      <p className="intro reveal">Queremos que formes parte de la celebración de nuestro amor.</p>
      <div className="date-big reveal">4<span className="dot">·</span>JULIO<span className="dot">·</span>2026</div>
      <div className="divider reveal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 3c-2 6-6 8-9 9 3 1 7 3 9 9 2-6 6-8 9-9-3-1-7-3-9-9Z" />
        </svg>
      </div>
      <p className="places reveal">
        El enlace matrimonial tendrá lugar a las <b style={{ fontWeight: 500 }}>19:00 h</b> en la Parroquia de Santiago el Mayor, Belalcázar.<br />
        La celebración será en el Complejo Rural El Soldado, Villanueva del Duque.
      </p>
      <div className="sign reveal">¡Os esperamos!</div>
    </section>
  )
}

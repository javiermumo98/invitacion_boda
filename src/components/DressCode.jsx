export default function DressCode() {
  return (
    <section className="block dresscode">
      <div className="overline reveal">Dress code</div>
      <h2 className="title reveal">Para el día</h2>
      <div className="dress-grid">
        <div className="dress-art reveal" role="img" aria-label="Paleta de colores sugerida">
          <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="rough2" x="-5%" y="-5%" width="110%" height="110%">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="n" />
                <feDisplacementMap in="SourceGraphic" in2="n" scale="1.2" />
              </filter>
            </defs>
            <g filter="url(#rough2)">
              <g transform="translate(140 95)" stroke="currentColor" strokeWidth="1.4" fill="none" opacity=".7">
                <circle cx="0" cy="0" r="52" fill="#fbfaf6" />
                <line x1="-40" y1="-40" x2="40" y2="40" />
              </g>
              <text
                x="140"
                y="195"
                textAnchor="middle"
                fontFamily="Cormorant Garamond, Georgia, serif"
                fontStyle="italic"
                fontSize="11"
                fill="currentColor"
                opacity=".55"
              >
                sin tonos blancos
              </text>
            </g>
          </svg>
        </div>
        <div>
          <p className="body-text reveal" style={{ fontStyle: 'italic', fontSize: 20, color: 'var(--ink)' }}>
            Nos encantará veros elegantes y llenos de color.
          </p>
          <p className="body-text reveal" style={{ marginTop: 14 }}>
            Os agradecemos evitar tonos claros similares al blanco.
          </p>
        </div>
      </div>
    </section>
  )
}

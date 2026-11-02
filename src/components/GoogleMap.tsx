interface GoogleMapProps {
  className?: string
  height?: string
}

/**
 * GoogleMap
 * ---------
 * Embeds an interactive Google Map centered on Toamasina (RN7, Route
 * d'Ambositra). Uses the no-API-key embed endpoint so it works out of
 * the box. To use a custom pin / Places API key, replace the iframe
 * `src` with your own Maps Embed API URL.
 */
export default function GoogleMap({ className = '', height = '420px' }: GoogleMapProps) {
  const query = encodeURIComponent("Marina Beach Toamasina, RN7 Route d'Ambositra, Toamasina, Madagascar")

  return (
    <div className={className} style={{ height }}>
      <iframe
        title="Marina Beach Toamasina — Localisation"
        src={`https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-md"
      />
    </div>
  )
}

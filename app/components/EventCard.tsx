interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  venue: string;
  description: string;
  featured?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function EventCard({
  title,
  date,
  time,
  venue,
  description,
  featured = false,
  ctaLabel = "Learn More",
  ctaHref = "#",
}: EventCardProps) {
  return (
    <div className={`event-card ${featured ? "featured" : ""}`}>
      <h3>{title}</h3>
      <div className="event-meta">
        <span>📅 {date}{time ? ` · ${time}` : ""}</span>
        <span>📍 {venue}</span>
        {featured && <strong style={{ color: "#00629B" }}>[ Inauguration Event ]</strong>}
      </div>
      <p style={{ fontSize: "0.88rem", color: "#333", marginBottom: "0.75rem" }}>{description}</p>
      <a href={ctaHref} className={featured ? "btn" : "btn-outline"} style={{ fontSize: "0.82rem" }}>
        {ctaLabel}
      </a>
    </div>
  );
}

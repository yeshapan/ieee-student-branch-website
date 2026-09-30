interface AboutSectionProps {
  id?: string;
  heading: string;
  subheading?: string;
  paragraphs: string[];
  children?: React.ReactNode;
}

export default function AboutSection({
  id,
  heading,
  subheading,
  paragraphs,
  children,
}: AboutSectionProps) {
  return (
    <section id={id} className="section fade-in-section">
      <div className="page-container">
        <h2>{heading}</h2>
        {subheading && (
          <p style={{ color: "#00629B", fontWeight: 600, fontSize: "0.88rem", marginBottom: "0.75rem" }}>
            {subheading}
          </p>
        )}
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {children}
      </div>
    </section>
  );
}

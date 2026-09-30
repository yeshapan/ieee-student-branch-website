interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  photoSrc?: string;
  photoAlt?: string;
  linkedin?: string;
  email?: string;
}

const initials = (name: string) =>
  name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);

export default function TeamCard({
  name,
  role,
  bio,
  photoSrc,
  photoAlt,
  linkedin,
  email,
}: TeamCardProps) {
  return (
    <div className="team-card">
      <div className="team-avatar">
        {photoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photoSrc} alt={photoAlt ?? name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <span title="Add headshot in /public/team/">{initials(name)}</span>
        )}
      </div>
      <p className="name">{name}</p>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
      {(linkedin || email) && (
        <div className="team-links">
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          {email && <a href={`mailto:${email}`}>Email</a>}
        </div>
      )}
    </div>
  );
}

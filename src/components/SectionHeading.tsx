export function SectionHeading({ label, title, text }: { label?: string; title: string; text?: string }) {
  return <div className="section-heading reveal">{label && <span className="section-label">{label}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function SectionHead({ index, eyebrow, title, lead }) {
  return (
    <header className="head reveal">
      <div>
        <p className="eyebrow">{index} / {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {lead && <p className="head-lead">{lead}</p>}
    </header>
  )
}

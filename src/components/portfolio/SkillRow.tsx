interface SkillRowProps {
  label: string;
  value: string;
  percent: string;
}

export function SkillRow({ label, value, percent }: SkillRowProps) {
  return (
    <div className="skill-row">
      <div className="skill-label">
        <strong>{label}</strong>
        <span>{value}</span>
        <b>{percent}</b>
      </div>
      <div className="skill-track">
        <span style={{ width: percent }} />
      </div>
    </div>
  );
}

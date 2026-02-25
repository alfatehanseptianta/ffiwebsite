import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`${styles.root} ${align === "center" ? styles.center : ""}`} data-reveal>
      <div className="tag">{eyebrow}</div>
      <h2 className="sectionTitle">{title}</h2>
      {description ? <p className={`${styles.description} textMuted`}>{description}</p> : null}
    </div>
  );
}

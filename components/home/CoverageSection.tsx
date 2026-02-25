import type { LandingContent } from "@/types/landing";
import styles from "./CoverageSection.module.css";

type CoverageSectionProps = {
  id: string;
  section: LandingContent["coverage"];
  joinHref: string;
};

export default function CoverageSection({ id, section, joinHref }: CoverageSectionProps) {
  return (
    <section id={id} className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.panel} data-reveal>
          <div className="tag">{section.eyebrow}</div>
          <h2 className="sectionTitle">{section.title}</h2>
          <ul className={styles.list}>
            {section.items.map((item) => (
              <li key={item.text} className={styles.item}>
                <span className={styles.check} aria-hidden="true" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.aside} data-reveal>
          <p className={styles.asideTag}>{section.asideTag}</p>
          <h3>{section.asideTitle}</h3>
          <p>{section.asideDescription}</p>
          <a href={joinHref} className={styles.asideLink}>
            {section.asideCta}
          </a>
        </aside>
      </div>
    </section>
  );
}

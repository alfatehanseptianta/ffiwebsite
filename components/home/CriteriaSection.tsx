import type { LandingContent } from "@/types/landing";
import SectionHeader from "./SectionHeader";
import styles from "./CriteriaSection.module.css";

type CriteriaSectionProps = {
  id: string;
  section: LandingContent["criteria"];
};

export default function CriteriaSection({ id, section }: CriteriaSectionProps) {
  return (
    <section id={id} className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className={styles.grid}>
          {section.groups.map((group) => (
            <article
              key={group.title}
              className={`${styles.card} ${group.variant ? styles[`card_${group.variant}`] : ""}`}
              data-reveal
            >
              <div className={styles.header}>
                <span className={styles.badge}>{group.badge}</span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

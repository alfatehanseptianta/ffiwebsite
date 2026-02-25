import type { LandingContent } from "@/types/landing";
import SectionHeader from "./SectionHeader";
import styles from "./FaqSection.module.css";

type FaqSectionProps = {
  id: string;
  section: LandingContent["faq"];
  openIndex: number | null;
  onToggle: (index: number) => void;
};

export default function FaqSection({ id, section, openIndex, onToggle }: FaqSectionProps) {
  return (
    <section id={id} className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className={styles.list}>
          {section.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${id}-panel-${index}`;
            const buttonId = `${id}-button-${index}`;

            return (
              <div key={item.question} className={styles.item} data-reveal>
                <h3 className={styles.itemHeading}>
                  <button
                    type="button"
                    id={buttonId}
                    className={styles.trigger}
                    onClick={() => onToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{item.question}</span>
                    <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

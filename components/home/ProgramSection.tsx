import Image from "next/image";
import type { LandingContent } from "@/types/landing";
import SectionHeader from "./SectionHeader";
import styles from "./ProgramSection.module.css";

type ProgramSectionProps = {
  id: string;
  section: LandingContent["program"];
};

export default function ProgramSection({ id, section }: ProgramSectionProps) {
  return (
    <section id={id} className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className={styles.grid}>
          {section.cards.map((card) => (
            <article
              key={card.title}
              className={`${styles.card} ${card.variant ? styles[`card_${card.variant}`] : ""}`}
              data-reveal
            >
              {card.imageSrc ? (
                <div className={styles.imageWrap}>
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt ?? card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className={styles.image}
                  />
                </div>
              ) : (
                <div className={styles.abstract} aria-hidden="true">
                  <span className={styles.abstractPill}>Partnership</span>
                  <div className={styles.abstractGlowA} />
                  <div className={styles.abstractGlowB} />
                  <div className={styles.abstractGrid} />
                </div>
              )}

              <div className={styles.body}>
                {card.eyebrow ? <p className={styles.eyebrow}>{card.eyebrow}</p> : null}
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

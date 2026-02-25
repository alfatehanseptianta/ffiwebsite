import Image from "next/image";
import type { HeroContent } from "@/types/landing";
import styles from "./Hero.module.css";

type HeroProps = {
  hero: HeroContent;
  programHref: string;
  joinHref: string;
};

export default function Hero({ hero, programHref, joinHref }: HeroProps) {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy} data-reveal>
          <div className="tag">{hero.eyebrow}</div>
          <h1 className="displayTitle">{hero.title}</h1>
          <p className={`${styles.description} textMuted`}>{hero.description}</p>
          <div className={styles.actions}>
            <a href={joinHref} className={styles.primaryButton}>
              {hero.primaryCta}
              <span aria-hidden="true">→</span>
            </a>
            <a href={programHref} className={styles.secondaryButton}>
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className={styles.visualWrap} data-reveal>
          <div className={styles.visualGlow} aria-hidden="true" />
          <div className={styles.visualCard}>
            <Image
              src="/assets/ffi/hero-students.jpg"
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.image}
            />
            <div className={styles.imageOverlay} aria-hidden="true" />

            <div className={`${styles.overlayCard} ${styles.overlayTop}`}>
              <p>{hero.overlayTopLabel}</p>
              <strong>{hero.overlayTopTitle}</strong>
            </div>

            <div className={`${styles.overlayCard} ${styles.overlayBottom}`}>
              <span className={styles.liveDot} aria-hidden="true" />
              <div>
                <p>{hero.overlayBottomLabel}</p>
                <strong>{hero.overlayBottomTitle}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

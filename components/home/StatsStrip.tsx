import type { StatItem } from "@/types/landing";
import styles from "./StatsStrip.module.css";

type StatsStripProps = {
  stats: StatItem[];
};

export default function StatsStrip({ stats }: StatsStripProps) {
  return (
    <div className={`sectionCompact ${styles.wrap}`}>
      <div className={`container ${styles.grid}`} data-reveal>
        {stats.map((item) => (
          <article key={item.label} className={styles.card}>
            <div
              className={styles.value}
              data-reveal
              data-count-target={item.value}
              data-count-suffix={item.suffix ?? ""}
            >
              0{item.suffix ?? ""}
            </div>
            <p className={styles.label}>{item.label}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

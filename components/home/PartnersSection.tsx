import type { LandingContent } from "@/types/landing";
import {
  GraduationCap,
  BookOpen,
  Users,
  Briefcase,
  Heart,
  Landmark,
  Award,
  Sprout,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import styles from "./PartnersSection.module.css";

type PartnersSectionProps = {
  id: string;
  section: LandingContent["partners"];
};

const CATEGORY_META: Record<string, { color: string; Icon: LucideIcon }> = {
  Pendidikan: { color: "#2563eb", Icon: GraduationCap },
  "Pendidikan Tinggi": { color: "#7c3aed", Icon: BookOpen },
  Komunitas: { color: "#16a34a", Icon: Users },
  Industri: { color: "#b45309", Icon: Briefcase },
  Sosial: { color: "#dc2626", Icon: Heart },
  Kebijakan: { color: "#0369a1", Icon: Landmark },
  Alumni: { color: "#ea580c", Icon: Award },
  Pengembangan: { color: "#059669", Icon: Sprout },
  Education: { color: "#2563eb", Icon: GraduationCap },
  "Higher Education": { color: "#7c3aed", Icon: BookOpen },
  Community: { color: "#16a34a", Icon: Users },
  Industry: { color: "#b45309", Icon: Briefcase },
  "Social Impact": { color: "#dc2626", Icon: Heart },
  Policy: { color: "#0369a1", Icon: Landmark },
  "Capacity Building": { color: "#059669", Icon: Sprout },
};

export default function PartnersSection({ id, section }: PartnersSectionProps) {
  return (
    <section id={id} className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />

        <div className={styles.grid}>
          {section.items.map((item) => {
            const meta = CATEGORY_META[item.category];
            const accent = meta?.color ?? "#ba3a2e";
            const Icon = meta?.Icon;

            return (
              <article
                key={`${item.name}-${item.category}`}
                className={styles.card}
                style={{ "--accent": accent } as React.CSSProperties}
                data-reveal
              >
                <div className={styles.cardHeader}>
                  {Icon && (
                    <div className={styles.iconWrap}>
                      <Icon size={16} strokeWidth={2} />
                    </div>
                  )}
                  <p className={styles.category}>{item.category}</p>
                </div>
                <h3>{item.name}</h3>
                {item.note ? <p className={styles.note}>{item.note}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import type { FormEvent } from "react";
import type { LandingContent } from "@/types/landing";
import styles from "./CtaSection.module.css";

type CtaSectionProps = {
  id: string;
  section: LandingContent["cta"];
  email: string;
  formStatus: "idle" | "error" | "success";
  formMessage: string;
  onEmailChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function CtaSection({
  id,
  section,
  email,
  formStatus,
  formMessage,
  onEmailChange,
  onSubmit,
}: CtaSectionProps) {
  return (
    <section id={id} className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.shell}>
          <div className={styles.copy}>
            <div className="tag">{section.eyebrow}</div>
            <h2 className="sectionTitle">{section.title}</h2>
            <p>{section.description}</p>
          </div>

          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <label htmlFor="join-email">{section.label}</label>
            <div className={styles.row}>
              <input
                id="join-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => onEmailChange(event.target.value)}
                placeholder={section.placeholder}
                autoComplete="email"
                required
              />
              <button type="submit">{section.buttonText}</button>
            </div>
            <p className={styles.helper}>{section.helperText}</p>
            <p
              className={`${styles.status} ${
                formStatus === "error" ? styles.statusError : formStatus === "success" ? styles.statusSuccess : ""
              }`}
              role="status"
              aria-live="polite"
            >
              {formMessage}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/NavBar";
import SectionHeader from "@/components/home/SectionHeader";
import { LANDING_CONTENT } from "@/lib/content";
import { SITE_PAGES_CONTENT } from "@/lib/site-pages-content";
import { useSiteChrome } from "@/components/site/useSiteChrome";
import type { SitePageBlock, SitePageKey } from "@/types/site-pages";
import styles from "./FFIInnerPageClient.module.css";

type Props = {
  pageKey: SitePageKey;
};

type ContactFormState = {
  name: string;
  email: string;
  message: string;
  about: string;
  status: "idle" | "error" | "success";
  statusMessage: string;
};

const initialContactFormState: ContactFormState = {
  name: "",
  email: "",
  message: "",
  about: "",
  status: "idle",
  statusMessage: "",
};

function isExternalUrl(href?: string) {
  return Boolean(href && /^https?:\/\//.test(href));
}

export default function FFIInnerPageClient({ pageKey }: Props) {
  const { locale, mobileNavOpen, navScrolled, setMobileNavOpen, handleLocaleChange } = useSiteChrome();
  const shared = LANDING_CONTENT[locale];
  const page = SITE_PAGES_CONTENT[pageKey][locale];
  const [contactForm, setContactForm] = useState<ContactFormState>(initialContactFormState);

  const contactBlock = useMemo(
    () => page.blocks.find((block) => block.type === "contact") as Extract<SitePageBlock, { type: "contact" }> | undefined,
    [page.blocks],
  );

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!contactBlock) return;

    const trimmedEmail = contactForm.email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!isValidEmail) {
      setContactForm((current) => ({
        ...current,
        status: "error",
        statusMessage: contactBlock.form.invalidEmailMessage,
      }));
      return;
    }

    setContactForm({
      ...initialContactFormState,
      status: "success",
      statusMessage: contactBlock.form.successMessage,
    });
  };

  return (
    <div className={styles.pageRoot} id="top">
      <NavBar
        nav={shared.nav}
        locale={locale}
        brandHref="/home"
        ctaHref="/kontak"
        mobileNavOpen={mobileNavOpen}
        scrolled={navScrolled}
        onLocaleChange={handleLocaleChange}
        onToggleMobileNav={() => setMobileNavOpen((value) => !value)}
        onCloseMobileNav={() => setMobileNavOpen(false)}
      />

      <main>
        <section className={`section ${styles.heroSection}`}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy} data-reveal>
              <div className="tag">{page.hero.eyebrow}</div>
              <h1 className="displayTitle">{page.hero.title}</h1>
              <p className={`${styles.heroDescription} textMuted`}>{page.hero.description}</p>

              {page.hero.badges?.length ? (
                <div className={styles.heroBadges}>
                  {page.hero.badges.map((badge) => (
                    <span key={badge} className={styles.heroBadge}>
                      {badge}
                    </span>
                  ))}
                </div>
              ) : null}

              {page.hero.actions?.length ? (
                <div className={styles.heroActions}>
                  {page.hero.actions.map((action) => (
                    <a
                      key={`${action.label}-${action.href}`}
                      href={action.href}
                      className={
                        action.variant === "secondary" ? styles.secondaryButton : styles.primaryButton
                      }
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>

            <div className={styles.heroVisual} data-reveal>
              {page.hero.imageSrc ? (
                <div className={styles.heroImageWrap}>
                  <Image
                    src={page.hero.imageSrc}
                    alt={page.hero.imageAlt ?? page.hero.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className={styles.heroImage}
                  />
                  <div className={styles.heroImageOverlay} aria-hidden="true" />
                </div>
              ) : (
                <div className={styles.heroAbstract} aria-hidden="true">
                  <div className={styles.heroAbstractOrbA} />
                  <div className={styles.heroAbstractOrbB} />
                  <div className={styles.heroAbstractGrid} />
                </div>
              )}

              <div className={styles.heroInfoPanel}>
                <p>{locale === "id" ? "Future Farmers of Indonesia" : "Future Farmers of Indonesia"}</p>
                <strong>{page.hero.eyebrow}</strong>
              </div>
            </div>
          </div>

          {page.metrics?.length ? (
            <div className={`container ${styles.metricsGrid}`}>
              {page.metrics.map((metric) => (
                <article key={`${metric.value}-${metric.label}`} className={styles.metricCard} data-reveal>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          ) : null}
        </section>

        {page.blocks.map((block, index) => {
          if (block.type === "prose") {
            return (
              <section key={`${block.type}-${index}`} id={block.id} className={`section ${styles.contentSection}`}>
                <div className={`container ${styles.proseGrid}`}>
                  <div className={styles.proseMain} data-reveal>
                    <SectionHeader
                      eyebrow={block.eyebrow}
                      title={block.title}
                      description={block.paragraphs[0]}
                    />
                    <div className={styles.proseParagraphs}>
                      {block.paragraphs.slice(1).map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  {block.quote ? (
                    <aside className={styles.quoteCard} data-reveal>
                      <p className={styles.quoteMark}>“</p>
                      <blockquote>{block.quote.text}</blockquote>
                      <p className={styles.quoteAuthor}>{block.quote.author}</p>
                      {block.quote.role ? <p className={styles.quoteRole}>{block.quote.role}</p> : null}
                    </aside>
                  ) : null}
                </div>
              </section>
            );
          }

          if (block.type === "grid") {
            const colsClass =
              block.columns === 2
                ? styles.cols2
                : block.columns === 4
                  ? styles.cols4
                  : styles.cols3;

            return (
              <section key={`${block.type}-${index}`} id={block.id} className={`section ${styles.contentSection}`}>
                <div className="container">
                  <SectionHeader
                    eyebrow={block.eyebrow}
                    title={block.title}
                    description={block.description}
                    align={block.columns === 4 ? "center" : "left"}
                  />

                  <div className={`${styles.cardGrid} ${colsClass} ${styles[`grid_${block.style ?? "default"}`]}`}>
                    {block.items.map((item) => (
                      <article key={`${item.title}-${item.meta ?? ""}`} className={styles.infoCard} data-reveal>
                        {item.imageSrc ? (
                          <div className={styles.infoCardImageWrap}>
                            <Image
                              src={item.imageSrc}
                              alt={item.imageAlt ?? item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                              className={styles.infoCardImage}
                            />
                          </div>
                        ) : null}
                        <div className={styles.infoCardBody}>
                          <div className={styles.infoCardMetaRow}>
                            {item.eyebrow ? <span className={styles.infoCardEyebrow}>{item.eyebrow}</span> : null}
                            {item.badge ? <span className={styles.infoCardBadge}>{item.badge}</span> : null}
                          </div>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                          {item.meta ? <p className={styles.infoCardMetaText}>{item.meta}</p> : null}
                          {item.linkLabel && item.href ? (
                            <a
                              href={item.href}
                              className={styles.cardLink}
                              target={isExternalUrl(item.href) ? "_blank" : undefined}
                              rel={isExternalUrl(item.href) ? "noreferrer" : undefined}
                            >
                              {item.linkLabel}
                            </a>
                          ) : null}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (block.type === "split") {
            return (
              <section key={`${block.type}-${index}`} id={block.id} className={`section ${styles.contentSection}`}>
                <div className={`container ${styles.splitGrid}`}>
                  <div className={styles.splitMain} data-reveal>
                    <SectionHeader eyebrow={block.eyebrow} title={block.title} description={block.description} />
                    {block.bullets?.length ? (
                      <ul className={styles.bulletList}>
                        {block.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  <aside className={styles.splitSide} data-reveal>
                    {block.sideTag ? <p className={styles.sideTag}>{block.sideTag}</p> : null}
                    <h3>{block.sideTitle}</h3>
                    {block.sideParagraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {block.sideBullets?.length ? (
                      <ul className={styles.sideBulletList}>
                        {block.sideBullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </aside>
                </div>
              </section>
            );
          }

          if (block.type === "timeline") {
            return (
              <section key={`${block.type}-${index}`} id={block.id} className={`section ${styles.contentSection}`}>
                <div className="container">
                  <SectionHeader eyebrow={block.eyebrow} title={block.title} description={block.description} />
                  <div className={styles.timelineList}>
                    {block.items.map((item) => (
                      <article key={`${item.step}-${item.title}`} className={styles.timelineItem} data-reveal>
                        <div className={styles.timelineStep}>{item.step}</div>
                        <div className={styles.timelineBody}>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (block.type === "contact") {
            return (
              <section key={`${block.type}-${index}`} id={block.id} className={`section ${styles.contentSection}`}>
                <div className="container">
                  <SectionHeader eyebrow={block.eyebrow} title={block.title} description={block.description} />
                  <div className={styles.contactGrid}>
                    <div className={styles.contactInfoGrid}>
                      {block.infoCards.map((item) => (
                        <article key={`${item.label}-${item.value}`} className={styles.contactInfoCard} data-reveal>
                          <p className={styles.contactInfoLabel}>{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className={styles.contactInfoValue}
                              target={isExternalUrl(item.href) ? "_blank" : undefined}
                              rel={isExternalUrl(item.href) ? "noreferrer" : undefined}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className={styles.contactInfoValue}>{item.value}</p>
                          )}
                          {item.note ? <p className={styles.contactInfoNote}>{item.note}</p> : null}
                        </article>
                      ))}
                    </div>

                    <form className={styles.contactForm} onSubmit={handleContactSubmit} noValidate data-reveal>
                      <div className={styles.contactFieldGrid}>
                        <label className={styles.contactField}>
                          <span>{block.form.nameLabel}</span>
                          <input
                            type="text"
                            value={contactForm.name}
                            onChange={(event) =>
                              setContactForm((current) => ({ ...current, name: event.target.value }))
                            }
                            placeholder={block.form.namePlaceholder}
                          />
                        </label>

                        <label className={styles.contactField}>
                          <span>{block.form.emailLabel}</span>
                          <input
                            type="email"
                            value={contactForm.email}
                            onChange={(event) =>
                              setContactForm((current) => ({ ...current, email: event.target.value }))
                            }
                            placeholder={block.form.emailPlaceholder}
                          />
                        </label>
                      </div>

                      <label className={styles.contactField}>
                        <span>{block.form.aboutLabel}</span>
                        <input
                          type="text"
                          value={contactForm.about}
                          onChange={(event) =>
                            setContactForm((current) => ({ ...current, about: event.target.value }))
                          }
                          placeholder={block.form.aboutPlaceholder}
                        />
                      </label>

                      <label className={styles.contactField}>
                        <span>{block.form.messageLabel}</span>
                        <textarea
                          rows={5}
                          value={contactForm.message}
                          onChange={(event) =>
                            setContactForm((current) => ({ ...current, message: event.target.value }))
                          }
                          placeholder={block.form.messagePlaceholder}
                        />
                      </label>

                      <button type="submit" className={styles.contactSubmitButton}>
                        {block.form.submitLabel}
                      </button>

                      <p
                        className={`${styles.contactStatus} ${
                          contactForm.status === "error"
                            ? styles.contactStatusError
                            : contactForm.status === "success"
                              ? styles.contactStatusSuccess
                              : ""
                        }`}
                        role="status"
                        aria-live="polite"
                      >
                        {contactForm.statusMessage}
                      </p>
                    </form>
                  </div>
                </div>
              </section>
            );
          }

          if (block.type === "cta") {
            return (
              <section key={`${block.type}-${index}`} id={block.id} className={`section ${styles.contentSection}`}>
                <div className="container">
                  <div className={styles.ctaBanner} data-reveal>
                    <div className={styles.ctaBannerCopy}>
                      <div className="tag">{block.eyebrow}</div>
                      <h2 className="sectionTitle">{block.title}</h2>
                      <p>{block.description}</p>
                    </div>
                    <a href={block.buttonHref} className={styles.ctaBannerButton}>
                      {block.buttonLabel}
                    </a>
                  </div>
                </div>
              </section>
            );
          }

          return null;
        })}
      </main>

      <Footer footer={shared.footer} year={new Date().getFullYear()} />
    </div>
  );
}

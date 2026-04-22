import type { PageConfig } from "@/content/types";
import { Section } from "../section";

/** Play-based approach, collaborators, and “why us” — shared across pages */
export function TherapyStack({ config }: { config: PageConfig }) {
  return (
    <>
      <Section id="approach" title={config.playBased.title}>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
          {config.playBased.intro}
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
              We focus on helping children:
            </h3>
            <ul className="mt-4 space-y-3 text-[var(--ebw-muted)]">
              {config.playBased.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[var(--ebw-sage)]" aria-hidden>
                    ✔
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-low)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
              What you can expect
            </h3>
            <ul className="mt-4 space-y-3 text-[var(--ebw-muted)]">
              {config.playBased.checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[var(--coral-warm)]" aria-hidden>
                    ✔
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-[var(--ebw-muted)]">
              {config.playBased.outro}
            </p>
          </div>
        </div>
      </Section>
      <Section title={config.collaborators.title}>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
          {config.collaborators.intro}
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {config.collaborators.list.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] px-4 py-3 font-medium text-[var(--ebw-ink)] shadow-[var(--shadow-soft)]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
          {config.collaborators.closing}
        </p>
      </Section>
      <Section id="why" title={config.why.title}>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
          {config.why.intro}
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {config.why.points.map((point) => (
            <li
              key={point}
              className="flex gap-3 rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-low)] px-4 py-3 text-[var(--ebw-muted)]"
            >
              <span className="font-semibold text-[var(--ebw-sage)]" aria-hidden>
                •
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
          {config.why.closing}
        </p>
      </Section>
    </>
  );
}

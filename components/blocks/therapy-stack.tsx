import type { PageConfig } from "@/content/types";
import { Section } from "../section";

export function PlayApproachSection({
  playBased,
  showOutro = true,
}: {
  playBased: PageConfig["playBased"];
  /** Hide the outro paragraph when it appears in a following section (e.g. homepage mobile block). */
  showOutro?: boolean;
}) {
  const outro = showOutro ? playBased.outro : undefined;
  const outcomesHeading = playBased.outcomesHeading ?? "We focus on helping children:";
  const checklistHeading =
    playBased.checklistHeading === undefined
      ? "What you can expect"
      : playBased.checklistHeading;
  const outcomesUseCheckmarks = playBased.outcomesUseCheckmarks !== false;

  return (
    <Section id="approach" title={playBased.title}>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
        {playBased.intro}
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
          <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
            {outcomesHeading}
          </h3>
          <ul className="mt-4 space-y-3 text-[var(--ebw-muted)]">
            {playBased.outcomes.map((item) => (
              <li key={item} className="flex gap-3">
                {outcomesUseCheckmarks ? (
                  <span className="text-[var(--ebw-sage)]" aria-hidden>
                    ✔
                  </span>
                ) : (
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ebw-sage)]"
                    aria-hidden
                  />
                )}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-low)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
          {checklistHeading ? (
            <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
              {checklistHeading}
            </h3>
          ) : null}
          <ul
            className={`space-y-3 text-[var(--ebw-muted)] ${checklistHeading ? "mt-4" : ""}`}
          >
            {playBased.checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[var(--coral-warm)]" aria-hidden>
                  ✔
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {outro ? (
            <p className="mt-6 text-base leading-relaxed text-[var(--ebw-muted)]">{outro}</p>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

export function CollaboratorsSection({
  collaborators,
}: {
  collaborators: PageConfig["collaborators"];
}) {
  return (
    <Section id="mobile" title={collaborators.title}>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
        {collaborators.intro}
      </p>
      {collaborators.listHeading ? (
        <h3 className="mt-8 font-display text-xl font-semibold text-[var(--ebw-ink)]">
          {collaborators.listHeading}
        </h3>
      ) : null}
      <ul
        className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ${collaborators.listHeading ? "mt-4" : "mt-8"}`}
      >
        {collaborators.list.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] px-4 py-3 font-medium text-[var(--ebw-ink)] shadow-[var(--shadow-soft)]"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
        {collaborators.closing}
      </p>
    </Section>
  );
}

export function WhyChooseSection({ why }: { why: PageConfig["why"] }) {
  const hasIntro = Boolean(why.intro?.trim());
  return (
    <Section id="why" title={why.title}>
      {hasIntro ? (
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
          {why.intro}
        </p>
      ) : null}
      {why.pointsHeading ? (
        <h3
          className={`font-display text-xl font-semibold text-[var(--ebw-ink)] ${hasIntro ? "mt-8" : "mt-4"}`}
        >
          {why.pointsHeading}
        </h3>
      ) : null}
      <ul
        className={`grid gap-3 sm:grid-cols-2 ${
          why.pointsHeading ? "mt-4" : hasIntro ? "mt-8" : "mt-4"
        }`}
      >
        {why.points.map((point) => (
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
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">{why.closing}</p>
    </Section>
  );
}

/** Play-based approach, collaborators, and “why us” — shared across pages */
export function TherapyStack({ config }: { config: PageConfig }) {
  return (
    <>
      <PlayApproachSection playBased={config.playBased} />
      <CollaboratorsSection collaborators={config.collaborators} />
      <WhyChooseSection why={config.why} />
    </>
  );
}

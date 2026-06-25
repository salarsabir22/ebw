import { Section } from "../section";

export function ContentListSection({
  title,
  intro,
  listHeading,
  list,
  closing,
  className,
}: {
  title: string;
  intro: string;
  listHeading: string;
  list: readonly string[];
  closing: string;
  className?: string;
}) {
  return (
    <Section title={title} className={className}>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
        {intro}
      </p>
      <h3 className="mt-8 font-display text-xl font-semibold text-[var(--ebw-ink)]">
        {listHeading}
      </h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {list.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] px-4 py-3 text-[var(--ebw-muted)]"
          >
            <span
              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ebw-sage)]"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
        {closing}
      </p>
    </Section>
  );
}

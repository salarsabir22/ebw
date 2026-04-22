import type { PageConfig } from "@/content/types";
import { Section } from "../section";

export function FocusCardsSection({
  cards,
  eyebrow = "What we support",
  title = "Clear goals. Warm sessions. Real-life communication.",
}: {
  cards: PageConfig["focusCards"];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <Section id="focus" eyebrow={eyebrow} title={title}>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] p-6 shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft-strong)]"
          >
            <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
              {card.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--ebw-muted)]">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

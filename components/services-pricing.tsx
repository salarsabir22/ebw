import { iepNote, pricing, servicesOffered } from "@/content/site";
import { Section } from "./section";

type ServicesPricingProps = {
  /** Use `pricing` on the dedicated pricing page to avoid duplicate ids */
  sectionId?: string;
};

export function ServicesPricing({ sectionId = "services" }: ServicesPricingProps) {
  return (
    <Section
      id={sectionId}
      eyebrow="Services & pricing"
      title="Pediatric speech therapy services in Northwest Houston"
    >
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
        Every child is unique, which is why our services are designed to support
        individualized communication goals through structured, evidence-based care.
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-low)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
          <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
            Services include
          </h3>
          <ul className="mt-4 space-y-3 text-[var(--ebw-muted)]">
            {servicesOffered.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--ebw-sage)]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-[var(--ebw-muted)]">
            <span className="font-semibold text-[var(--ebw-ink)]">IEP note: </span>
            {iepNote}
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
              {pricing.evaluation.label}
            </h3>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-[var(--coral-warm)]">
              {pricing.evaluation.price}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ebw-muted)]">
              {pricing.evaluation.detail}
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
              Therapy sessions
            </h3>
            <ul className="mt-4 divide-y divide-[var(--ebw-border)]">
              {pricing.sessions.map((row) => (
                <li
                  key={row.minutes}
                  className="flex items-center justify-between py-3 text-[var(--ebw-muted)]"
                >
                  <span>{row.minutes} minutes</span>
                  <span className="font-semibold text-[var(--ebw-ink)]">
                    {row.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {pricing.bundles.map((bundle) => (
          <div
            key={bundle.name}
            className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] p-6 sm:p-8 shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft-strong)]"
          >
            <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
              Bundled session discounts (pre-paid)
            </h3>
            <p className="mt-2 text-sm font-semibold text-[var(--ebw-sage)]">
              {bundle.name}
            </p>
            <ul className="mt-4 space-y-2 text-[var(--ebw-muted)]">
              {bundle.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-2xl border border-[var(--ebw-border)] bg-[color-mix(in_srgb,var(--primary)_7%,var(--surface))] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
        <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
          {pricing.travel.title}
        </h3>
        <p className="mt-3 text-[var(--ebw-muted)]">
          Travel is free within a {pricing.travel.freeRadiusMiles}-mile radius of
          the following zip codes: {pricing.travel.zips.join(", ")}.
        </p>
        <p className="mt-3 text-[var(--ebw-muted)]">{pricing.travel.feeNote}</p>
      </div>
    </Section>
  );
}

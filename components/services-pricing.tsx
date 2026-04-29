import type { ServicesPricingBundle } from "@/content/types";
import { iepNote, pricing, servicesOffered } from "@/content/site";
import { Section } from "./section";

type ServicesPricingProps = {
  /** Use `pricing` on the dedicated pricing page to avoid duplicate ids */
  sectionId?: string;
  eyebrow?: string;
  title?: string;
  /** Replaces the default services intro paragraph. */
  intro?: string;
  /** Replaces the default service bullet list. */
  servicesList?: readonly string[];
  showIepNote?: boolean;
  evaluationLabel?: string;
  evaluationPrice?: string;
  evaluationDetail?: string;
  therapySessionsHeading?: string;
  /** Replaces default bundle data (names + lines). */
  bundles?: readonly ServicesPricingBundle[];
  /**
   * When set, one heading is shown above the bundle grid; each card shows only the bundle name + lines.
   */
  bundlesAreaTitle?: string;
  /** Default bundle card heading when `bundlesAreaTitle` is not used. */
  perCardBundlesHeading?: string;
  /** When set, replaces the default zip-radius travel block. */
  travelCustom?: { title: string; paragraphs: readonly string[] };
};

const defaultIntro =
  "Every child is unique, which is why our services are designed to support individualized communication goals through structured, evidence-based care.";

export function ServicesPricing({
  sectionId = "services",
  eyebrow = "Services & pricing",
  title = "Pediatric speech therapy services in Northwest Houston",
  intro = defaultIntro,
  servicesList = servicesOffered,
  showIepNote = true,
  evaluationLabel = pricing.evaluation.label,
  evaluationPrice = pricing.evaluation.price,
  evaluationDetail = pricing.evaluation.detail,
  therapySessionsHeading = "Therapy Sessions:",
  bundles = pricing.bundles,
  bundlesAreaTitle,
  perCardBundlesHeading = "Bundled Session Discounts (Pre-Paid):",
  travelCustom,
}: ServicesPricingProps) {
  const bundleList = bundles;

  return (
    <Section id={sectionId} eyebrow={eyebrow} title={title}>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
        {intro}
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-low)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
          <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
            Services Include:
          </h3>
          <ul className="mt-4 space-y-3 text-[var(--ebw-muted)]">
            {servicesList.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--ebw-sage)]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {showIepNote ? (
            <p className="mt-6 text-sm leading-relaxed text-[var(--ebw-muted)]">
              <span className="font-semibold text-[var(--ebw-ink)]">IEP Note: </span>
              {iepNote}
            </p>
          ) : null}
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
              {evaluationLabel}
            </h3>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-[var(--coral-warm)]">
              {evaluationPrice}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ebw-muted)]">
              {evaluationDetail}
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
              {therapySessionsHeading}
            </h3>
            <ul className="mt-4 divide-y divide-[var(--ebw-border)]">
              {pricing.sessions.map((row) => (
                <li
                  key={row.minutes}
                  className="flex items-center justify-between py-3 text-[var(--ebw-muted)]"
                >
                  <span>{row.minutes} Minutes</span>
                  <span className="font-semibold text-[var(--ebw-ink)]">
                    {row.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {bundlesAreaTitle ? (
        <h3 className="mt-10 font-display text-xl font-semibold text-[var(--ebw-ink)]">
          {bundlesAreaTitle}
        </h3>
      ) : null}
      <div
        className={`grid gap-6 lg:grid-cols-2 ${bundlesAreaTitle ? "mt-4" : "mt-10"}`}
      >
        {bundleList.map((bundle) => (
          <div
            key={bundle.name}
            className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] p-6 sm:p-8 shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft-strong)]"
          >
            {bundlesAreaTitle ? null : (
              <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
                {perCardBundlesHeading}
              </h3>
            )}
            <p
              className={`text-sm font-semibold text-[var(--ebw-sage)] ${bundlesAreaTitle ? "" : "mt-2"}`}
            >
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
        {travelCustom ? (
          <>
            <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
              {travelCustom.title}
            </h3>
            {travelCustom.paragraphs.map((p) => (
              <p key={p} className="mt-3 text-[var(--ebw-muted)]">
                {p}
              </p>
            ))}
          </>
        ) : (
          <>
            <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
              {pricing.travel.title}
            </h3>
            <p className="mt-3 text-[var(--ebw-muted)]">
              Travel is free within a {pricing.travel.freeRadiusMiles}-mile radius of
              the following zip codes: {pricing.travel.zips.join(", ")}.
            </p>
            <p className="mt-3 text-[var(--ebw-muted)]">{pricing.travel.feeNote}</p>
          </>
        )}
      </div>
    </Section>
  );
}

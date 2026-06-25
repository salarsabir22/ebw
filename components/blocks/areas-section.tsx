import Link from "next/link";
import type { PageConfig } from "@/content/types";
import { Section } from "../section";

export function AreasSection({
  areas,
  linkWoodlandsPage,
}: {
  areas: PageConfig["areas"];
  linkWoodlandsPage: boolean;
}) {
  return (
    <Section id="areas" title={areas.title}>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
        {areas.intro}
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {areas.bullets.map((place) => {
          const lower = place.toLowerCase();
          const isWoodlands = lower.includes("woodlands");
          const isSpring = lower === "spring" || lower.startsWith("spring,");
          const isTomball = lower === "tomball" || lower.startsWith("tomball,");
          const isConroe = lower === "conroe" || lower.startsWith("conroe,");
          const isMagnolia =
            lower === "magnolia" || lower.startsWith("magnolia,");
          const springLink =
            areas.springHref && isSpring ? areas.springHref : null;
          const tomballLink =
            areas.tomballHref && isTomball ? areas.tomballHref : null;
          const conroeLink =
            areas.conroeHref && isConroe ? areas.conroeHref : null;
          const magnoliaLink =
            areas.magnoliaHref && isMagnolia ? areas.magnoliaHref : null;
          return (
            <li
              key={place}
              className="flex items-center gap-3 rounded-full border border-[var(--ebw-border)] bg-[color-mix(in_srgb,var(--primary-container)_10%,var(--surface-container-lowest))] px-4 py-2.5 text-[var(--ebw-ink)] shadow-[var(--shadow-soft)]"
            >
              <span
                className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--ebw-sage)]"
                aria-hidden
              />
              {springLink ? (
                <Link
                  className="font-semibold underline-offset-4 hover:underline"
                  href={springLink}
                >
                  {place}
                </Link>
              ) : tomballLink ? (
                <Link
                  className="font-semibold underline-offset-4 hover:underline"
                  href={tomballLink}
                >
                  {place}
                </Link>
              ) : conroeLink ? (
                <Link
                  className="font-semibold underline-offset-4 hover:underline"
                  href={conroeLink}
                >
                  {place}
                </Link>
              ) : magnoliaLink ? (
                <Link
                  className="font-semibold underline-offset-4 hover:underline"
                  href={magnoliaLink}
                >
                  {place}
                </Link>
              ) : isWoodlands && linkWoodlandsPage ? (
                <Link
                  className="font-semibold underline-offset-4 hover:underline"
                  href={areas.woodlandsHref}
                >
                  {place}
                </Link>
              ) : (
                <span className="font-semibold">{place}</span>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

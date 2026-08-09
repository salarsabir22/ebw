import Image from "next/image";
import type { PageImage } from "@/content/images";
import { brand } from "@/content/site";
import type { PageConfig } from "@/content/types";
import { cn } from "@/lib/utils";
import { TextBlockContent } from "../text-segments";
import { Section } from "../section";

export function AboutBlock({
  about,
  image,
}: {
  about: PageConfig["about"];
  image?: PageImage;
}) {
  const prose = (
    <div className="space-y-4 text-lg leading-relaxed text-[var(--ebw-muted)]">
      {about.paragraphs.map((p, i) => (
        <p key={i}>
          <TextBlockContent block={p} />
        </p>
      ))}
    </div>
  );

  const ashaCredential = (
    <div className="mt-6">
      <Image
        src={brand.ashaLogoSrc}
        alt={brand.ashaLogoAlt}
        width={260}
        height={72}
        className="h-auto w-[220px] max-w-full sm:w-[260px]"
      />
    </div>
  );

  const specialties = (
    <div className="mt-10 rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-low)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
      <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
        {about.specialtiesTitle}
      </h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {about.specialties.map((item) => (
          <li key={item} className="flex gap-3 text-[var(--ebw-muted)]">
            <span
              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ebw-sage)]"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 space-y-4 text-[var(--ebw-muted)]">
        {about.closingParagraphs.map((p, i) => (
          <p key={i}>
            <TextBlockContent block={p} />
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <Section id="about" title={about.title}>
      {about.subtitle ? (
        <p className="mt-3 font-display text-xl font-semibold text-[var(--ebw-ink)]">
          {about.subtitle}
        </p>
      ) : null}
      {image ? (
        <div className={`grid gap-10 lg:grid-cols-2 lg:items-start ${about.subtitle ? "mt-8" : "mt-10"}`}>
          <div
            className={cn(
              "relative w-full overflow-hidden rounded-3xl shadow-[var(--shadow-soft-strong)] lg:order-2 lg:max-h-[36rem]",
              image.aspect ?? "aspect-[3/4]",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              style={{
                objectPosition: image.objectPosition ?? "center 30%",
              }}
            />
          </div>
          <div className="lg:order-1">
            {prose}
            {ashaCredential}
            {specialties}
          </div>
        </div>
      ) : (
        <>
          <div className="mt-6">{prose}</div>
          {ashaCredential}
          {specialties}
        </>
      )}
    </Section>
  );
}

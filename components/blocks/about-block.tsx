import Image from "next/image";
import type { PageImage } from "@/content/images";
import type { PageConfig } from "@/content/types";
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
        <p key={i}>{p}</p>
      ))}
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
      <p className="mt-6 text-[var(--ebw-muted)]">{about.closing}</p>
    </div>
  );

  return (
    <Section id="about" title={about.title}>
      {image ? (
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[var(--shadow-soft-strong)] lg:order-2">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
            {prose}
            {specialties}
          </div>
        </div>
      ) : (
        <>
          <div className="mt-6">{prose}</div>
          {specialties}
        </>
      )}
    </Section>
  );
}

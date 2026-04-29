import Image from "next/image";
import Link from "next/link";
import type { PageImage } from "@/content/images";
import type { HeroConfig, HeroCta } from "@/content/types";
import { buttonVariants } from "@/components/ui/button";
import { contact } from "@/content/site";
import { cn } from "@/lib/utils";

function isTelCta(cta: HeroCta): cta is { label: string; tel: true } {
  return "tel" in cta && cta.tel === true;
}

export function Hero({
  hero,
  image,
  primaryCtaHref = "/contact",
}: {
  hero: HeroConfig;
  image?: PageImage;
  /** Fallback when `hero.primaryCta` is not set */
  primaryCtaHref?: string;
}) {
  const primaryBtn = cn(
    buttonVariants({ variant: "default", size: "lg" }),
    "min-h-11 px-6 text-base shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft-strong)]",
  );
  const secondaryBtn = cn(
    buttonVariants({ variant: "outline", size: "lg" }),
    "min-h-11 border-primary px-6 text-base text-primary shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-muted",
  );

  const primaryCta = hero.primaryCta;
  const secondaryCta = hero.secondaryCta;

  return (
    <div className="relative overflow-hidden border-b border-border bg-muted/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(880px 520px at 18% 0%, color-mix(in srgb, var(--brand-teal) 22%, transparent), transparent 58%), radial-gradient(720px 440px at 92% 12%, color-mix(in srgb, var(--brand-pink) 18%, transparent), transparent 52%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div
          className={
            image
              ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              : "max-w-3xl"
          }
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {hero.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.15] lg:text-[3rem] lg:leading-[1.12]">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-normal leading-relaxed text-muted-foreground sm:text-[1.125rem]">
              {hero.subtitle}
            </p>
            {hero.supportingParagraph ? (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-[1.125rem]">
                {hero.supportingParagraph}
              </p>
            ) : null}
            {hero.bilingualLine ? (
              <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-foreground sm:text-[1.125rem]">
                {hero.bilingualLine}
              </p>
            ) : null}
            {hero.brandQuote ? (
              <p className="mt-5 max-w-2xl text-lg font-medium leading-snug text-[var(--brand-rose)] sm:text-[1.125rem]">
                {hero.brandQuote}
              </p>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {primaryCta && !isTelCta(primaryCta) ? (
                <Link href={primaryCta.href} className={primaryBtn}>
                  {primaryCta.label}
                </Link>
              ) : primaryCta && isTelCta(primaryCta) ? (
                <a href={`tel:${contact.phoneE164}`} className={primaryBtn}>
                  {primaryCta.label}
                </a>
              ) : (
                <Link href={primaryCtaHref} className={primaryBtn}>
                  Request information
                </Link>
              )}
              {secondaryCta && isTelCta(secondaryCta) ? (
                <a href={`tel:${contact.phoneE164}`} className={secondaryBtn}>
                  {secondaryCta.label}
                </a>
              ) : secondaryCta ? (
                <Link href={secondaryCta.href} className={secondaryBtn}>
                  {secondaryCta.label}
                </Link>
              ) : (
                <a href={`tel:${contact.phoneE164}`} className={secondaryBtn}>
                  Call {contact.phoneDisplay}
                </a>
              )}
            </div>
            {hero.servingLine ? (
              <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">
                {hero.servingLine}
              </p>
            ) : null}
          </div>
          {image ? (
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl shadow-[var(--shadow-soft-strong)] lg:max-w-none">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

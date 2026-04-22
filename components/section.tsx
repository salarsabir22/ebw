import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-b border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--ebw-sage)]">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="mt-2 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[var(--ebw-ink)] sm:text-4xl sm:leading-[1.25]">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}

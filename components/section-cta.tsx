import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SectionCta({
  heading = "Ready to get started?",
  buttonLabel = "Book now",
}: {
  heading?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="border-b border-[var(--ebw-border)] bg-[color-mix(in_srgb,var(--brand-teal)_12%,var(--surface))]">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-8 lg:px-8">
        <p className="max-w-xl font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {heading}
        </p>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "min-h-10 shrink-0 px-5 text-sm shadow-[var(--shadow-soft)]",
          )}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

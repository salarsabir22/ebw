import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--surface-container-lowest)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-[var(--shadow-soft)]"
      >
        Skip to content
      </a>
      <SiteHeader />
      <div className="border-b border-[var(--outline-variant)] bg-[color-mix(in_srgb,var(--brand-teal)_8%,var(--surface))] px-3 py-2 text-center">
        <p className="mx-auto max-w-7xl whitespace-nowrap text-[clamp(0.62rem,2.7vw,0.875rem)] italic leading-none text-[var(--ebw-ink)]">
          Now Accepting Blue Cross Blue Shield of Texas{" "}
          <strong className="font-bold">Insurance</strong>
        </p>
      </div>
      <main id="main" className="flex flex-1 flex-col">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

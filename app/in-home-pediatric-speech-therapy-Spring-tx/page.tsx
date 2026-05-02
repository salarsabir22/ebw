import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { springLocationPage } from "@/content/spring";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: springLocationPage.title },
  openGraph: {
    title: springLocationPage.title,
    url: `${site.url}${springLocationPage.path}`,
  },
};

export default function SpringTxPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {springLocationPage.heading}
        </h1>
      </div>
    </SiteShell>
  );
}

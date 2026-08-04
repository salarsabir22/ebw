"use client";

import { useEffect, useRef } from "react";
import { Section } from "@/components/section";

const TRUSTINDEX_SRC =
  "https://cdn.trustindex.io/loader.js?7203dbf78f225187f8464ce48df";

export function TrustIndexReviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("script[data-trustindex]")) {
      return;
    }

    const script = document.createElement("script");
    script.src = TRUSTINDEX_SRC;
    script.async = true;
    script.defer = true;
    script.dataset.trustindex = "true";
    container.appendChild(script);
  }, []);

  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--ebw-sage)]">
          Reviews
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[var(--ebw-ink)] sm:text-4xl sm:leading-[1.25]">
          What families say
        </h2>
        <div
          ref={containerRef}
          className="mt-8 flex min-h-[12rem] justify-center overflow-x-auto [&_.ti-widget]:mx-auto [&_.ti-widget]:!float-none"
        />
      </div>
    </Section>
  );
}

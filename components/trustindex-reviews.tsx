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
    <Section eyebrow="Reviews" title="What families say">
      <div ref={containerRef} className="mt-8 min-h-[12rem]" />
    </Section>
  );
}

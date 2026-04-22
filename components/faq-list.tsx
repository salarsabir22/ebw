"use client";

import type { FaqItem } from "@/content/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "./section";

export function FaqList({
  introTitle,
  introSubtitle,
  items,
}: {
  introTitle: string;
  introSubtitle: string;
  items: FaqItem[];
}) {
  return (
    <Section id="faq" eyebrow={introSubtitle} title={introTitle}>
      <Accordion multiple className="mt-8 rounded-2xl border border-border bg-card px-2 py-1 shadow-[var(--shadow-soft)] sm:px-3">
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`faq-${index}`}>
            <AccordionTrigger className="px-3 py-3 text-[0.95rem] font-semibold text-foreground sm:px-4 sm:text-base">
              <span className="pr-3 text-left">
                <span className="mr-2 text-muted-foreground">
                  {(index + 1).toString().padStart(2, "0")}.
                </span>
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-3 pb-3 text-muted-foreground sm:px-4">
              <p className="max-w-3xl text-sm leading-relaxed sm:text-base">
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

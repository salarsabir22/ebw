"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/actions/inquiry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const initialState: InquiryState = { ok: false, message: "" };

export function InquiryForm({ pagePath }: { pagePath: string }) {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <input type="hidden" name="pagePath" value={pagePath} />
      <div
        className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
        aria-hidden
      >
        <label htmlFor="website">Company</label>
        <input
          tabIndex={-1}
          autoComplete="off"
          id="website"
          name="website"
          type="text"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" required autoComplete="name" className="mt-2 h-10" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 h-10"
          />
        </div>
        <div>
          <Label htmlFor="phone">
            Phone{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 h-10"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">How can we help?</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 min-h-32 resize-y"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
            <input
              className="mt-1 size-4 rounded border border-input text-primary accent-primary"
              name="newsletter"
              type="checkbox"
            />
            <span>
              Add me to occasional updates with resources and announcements
              (optional).
            </span>
          </label>
        </div>
      </div>
      {state.message ? (
        <p
          className={cn(
            "mt-4 rounded-lg px-4 py-3 text-sm",
            state.ok
              ? "bg-primary/10 text-foreground"
              : "bg-destructive/10 text-destructive",
          )}
          role={state.ok ? "status" : "alert"}
        >
          {state.message}
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={pending}
        className="mt-6 w-full min-h-11 text-base sm:w-auto"
      >
        {pending ? "Sending…" : "Submit inquiry"}
      </Button>
    </form>
  );
}

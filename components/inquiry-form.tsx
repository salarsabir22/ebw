"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { CheckIcon } from "lucide-react";
import { submitInquiry, type InquiryState } from "@/actions/inquiry";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const initialState: InquiryState = { ok: false, message: "" };

/** Refresh-safe counterpart of the success dialog (see app/thank-you). */
const THANK_YOU_PATH = "/thank-you";

/**
 * The submit stays on the page, but conversion tracking keys off a distinct URL,
 * so swap the address bar to /thank-you without navigating (the panel stays mounted).
 */
function useThankYouUrl(sent: boolean) {
  const updated = useRef(false);

  useEffect(() => {
    if (!sent || updated.current) return;
    updated.current = true;
    window.history.replaceState(window.history.state, "", THANK_YOU_PATH);
  }, [sent]);
}

export function InquiryForm({
  pagePath,
  variant = "default",
  idPrefix = "",
}: {
  pagePath: string;
  variant?: "default" | "compact";
  idPrefix?: string;
}) {
  const [popupOpen, setPopupOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    async (prevState: InquiryState, formData: FormData) => {
      const next = await submitInquiry(prevState, formData);
      // state.ok stays true after a completed send, so drive the popup from the
      // action result — deriving it from state would never reopen it.
      if (next.ok) setPopupOpen(true);
      return next;
    },
    initialState,
  );
  const compact = variant === "compact";
  const fieldId = (name: string) => (idPrefix ? `${idPrefix}-${name}` : name);
  const hpId = fieldId("ebw_hp_fax");
  useThankYouUrl(state.ok);

  function closePopup() {
    setPopupOpen(false);
    // Already delivered — clear the fields so the same inquiry can't be sent twice.
    formRef.current?.reset();
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className={cn(
        "relative rounded-2xl border bg-card shadow-[var(--shadow-soft)]",
        compact
          ? "w-full border-primary/40 p-5 sm:p-6 lg:p-7"
          : "border-border p-6 sm:p-8",
      )}
    >
      <Dialog
        open={popupOpen}
        onOpenChange={(next) => {
          if (!next) closePopup();
        }}
      >
        <DialogContent className="max-w-sm text-center">
          <span
            aria-hidden
            className="mx-auto inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary"
          >
            <CheckIcon className="size-5" />
          </span>
          <DialogTitle className="sr-only">Inquiry received</DialogTitle>
          <DialogDescription className="break-words text-base leading-relaxed text-foreground">
            {state.message}
          </DialogDescription>
        </DialogContent>
      </Dialog>
      <input type="hidden" name="pagePath" value={pagePath} />
      {/* Honeypot: do not name this "website" — browsers autofill that and skip the real send. */}
      <div
        className="pointer-events-none absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden opacity-0"
        aria-hidden
      >
        <label htmlFor={hpId}>Fax</label>
        <input
          tabIndex={-1}
          autoComplete="off"
          id={hpId}
          name="ebw_hp_fax"
          type="text"
          defaultValue=""
        />
      </div>
      {compact ? (
        <div className="mb-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Free 15 min consultation
          </p>
          <p className="mt-1 font-display text-xl font-semibold tracking-tight text-foreground">
            Tell us a little about your child
          </p>
        </div>
      ) : null}
      <div className={cn("grid sm:grid-cols-2", compact ? "gap-3" : "gap-4")}>
        <div className={compact ? undefined : "sm:col-span-2"}>
          <Label htmlFor={fieldId("name")}>Your name</Label>
          <Input
            id={fieldId("name")}
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 h-10 bg-background"
          />
        </div>
        <div>
          <Label htmlFor={fieldId("email")}>Email</Label>
          <Input
            id={fieldId("email")}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 h-10 bg-background"
          />
        </div>
        <div className={compact ? "sm:col-span-2" : undefined}>
          <Label htmlFor={fieldId("phone")}>
            Phone{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 h-10 bg-background"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor={fieldId("message")}>How can we help?</Label>
          <Textarea
            id={fieldId("message")}
            name="message"
            required
            rows={compact ? 3 : 5}
            className={cn(
              "mt-1.5 resize-y bg-background",
              compact ? "min-h-[5.5rem]" : "min-h-32",
            )}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-2.5 text-sm text-muted-foreground">
            <input
              className="mt-0.5 size-4 rounded border border-input text-primary accent-primary"
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
      {!state.ok && state.message ? (
        <p
          className="mt-4 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive"
          role="alert"
        >
          {state.message}
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={pending}
        className={cn(
          "min-h-11 text-base",
          compact ? "mt-4 w-full" : "mt-6 w-full sm:w-auto",
        )}
      >
        {pending ? "Sending…" : "Submit inquiry"}
      </Button>
    </form>
  );
}

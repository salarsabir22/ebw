import { contact } from "@/content/site";

export function ContactSidebar() {
  return (
    <div className="rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-lowest)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
      <h3 className="font-display text-xl font-semibold text-[var(--ebw-ink)]">
        Prefer to reach out directly?
      </h3>
      <p className="mt-3 text-[var(--ebw-muted)]">
        You’re always welcome to call or email—especially if you’re unsure where
        to start.
      </p>
      <ul className="mt-6 space-y-3 text-[var(--ebw-muted)]">
        <li>
          <span className="font-semibold text-[var(--ebw-ink)]">Phone: </span>
          <a
            className="underline-offset-4 hover:underline"
            href={`tel:${contact.phoneE164}`}
          >
            {contact.phoneDisplay}
          </a>
        </li>
        <li>
          <span className="font-semibold text-[var(--ebw-ink)]">Email: </span>
          <a
            className="underline-offset-4 hover:underline"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
        </li>
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-[var(--ebw-muted)]">
        If you’d like updates on services and resources, check “Add me to
        occasional updates” in the form—optional, and easy to unsubscribe later.
      </p>
    </div>
  );
}

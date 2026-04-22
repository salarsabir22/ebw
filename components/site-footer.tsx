import Link from "next/link";
import { contact, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--outline-variant)] bg-[var(--ebw-footer-bg)] text-[var(--ebw-footer-fg)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--ebw-footer-fg)_78%,transparent)]">
            In-home pediatric speech therapy serving Northwest Houston and The
            Woodlands area communities.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[color-mix(in_srgb,var(--ebw-footer-fg)_72%,transparent)]">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                className="underline-offset-4 transition duration-200 hover:underline"
                href={`tel:${contact.phoneE164}`}
              >
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="underline-offset-4 transition duration-200 hover:underline"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
            </li>
            <li className="text-[color-mix(in_srgb,var(--ebw-footer-fg)_78%,transparent)]">
              <Link className="underline-offset-4 hover:underline" href="/">
                Northwest Houston
              </Link>
              {" · "}
              <Link
                className="underline-offset-4 hover:underline"
                href="/in-home-pediatric-speech-therapy-the-woodlands"
              >
                The Woodlands
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color-mix(in_srgb,var(--ebw-footer-fg)_72%,transparent)]">
            Explore
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-3">
            <li>
              <Link className="underline-offset-4 hover:underline" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href="/therapy">
                Therapy
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color-mix(in_srgb,var(--ebw-footer-fg)_12%,transparent)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-[color-mix(in_srgb,var(--ebw-footer-fg)_62%,transparent)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="max-w-prose leading-relaxed">
            This website is for informational purposes and does not replace
            professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

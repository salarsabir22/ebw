"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { serviceAreas } from "@/content/locations";
import { mainNav } from "@/content/nav";
import { brand, contact } from "@/content/site";
import { cn } from "@/lib/utils";

function navLinkClass(href: string, pathname: string | null) {
  const active = pathname === href;
  return `rounded-lg px-2.5 py-1.5 text-sm font-semibold transition duration-200 ease-out lg:px-3 ${
    active
      ? "bg-primary/10 text-primary"
      : "text-foreground/85 hover:bg-muted hover:text-foreground"
  }`;
}

function AreasWeServeMenu({
  pathname,
  onNavigate,
  className,
}: {
  pathname: string | null;
  onNavigate?: () => void;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const areaActive = serviceAreas.some((area) => pathname === area.href);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-semibold transition duration-200 ease-out lg:px-3",
          areaActive
            ? "bg-primary/10 text-primary"
            : "text-foreground/85 hover:bg-muted hover:text-foreground",
        )}
      >
        Areas We Serve
        <ChevronDownIcon
          className={cn(
            "size-3.5 shrink-0 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label="Areas we serve"
          className="absolute left-0 top-full z-50 mt-1 min-w-[13.5rem] rounded-xl border border-border bg-background p-1.5 shadow-[var(--shadow-soft-strong)]"
        >
          {serviceAreas.map((area) => {
            const active = pathname === area.href;
            return (
              <Link
                key={area.href}
                role="menuitem"
                href={area.href}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm font-semibold transition duration-150",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/85 hover:bg-muted hover:text-foreground",
                )}
              >
                {area.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const areaActive = serviceAreas.some((area) => pathname === area.href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 shrink items-center gap-2.5 leading-tight sm:gap-3"
        >
          <Image
            src={brand.logoSrc}
            alt={brand.logoAlt}
            width={52}
            height={52}
            className="size-11 shrink-0 rounded-full object-contain ring-2 ring-[var(--brand-pink)]/35 sm:size-12"
            priority
          />
          <span className="font-display text-[0.95rem] font-semibold tracking-tight text-foreground sm:text-lg">
            <span className="block">Expression Beyond</span>
            <span className="block">Words</span>
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-0.5 md:flex lg:gap-1"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClass(item.href, pathname)}
            >
              {item.label}
            </Link>
          ))}
          <AreasWeServeMenu pathname={pathname} />
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "gap-1.5 md:hidden",
              )}
            >
              <MenuIcon className="size-4" />
              Menu
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="font-display">Menu</SheetTitle>
              </SheetHeader>
              <nav
                aria-label="Primary mobile"
                className="mt-6 flex flex-col gap-1 px-1"
              >
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-muted",
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div>
                  <button
                    type="button"
                    aria-expanded={mobileAreasOpen}
                    onClick={() => setMobileAreasOpen((value) => !value)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-semibold hover:bg-muted",
                      areaActive ? "text-primary" : "text-foreground",
                    )}
                  >
                    Areas We Serve
                    <ChevronDownIcon
                      className={cn(
                        "size-4 shrink-0 transition-transform duration-200",
                        mobileAreasOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {mobileAreasOpen ? (
                    <div className="ml-2 mt-1 flex flex-col gap-0.5 border-l border-border pl-2">
                      {serviceAreas.map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "rounded-lg px-3 py-2 text-sm font-semibold hover:bg-muted",
                            pathname === area.href
                              ? "text-primary"
                              : "text-foreground/85",
                          )}
                        >
                          {area.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <a
            href={`mailto:${contact.email}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            Email
          </a>
          <a
            href={`tel:${contact.phoneE164}`}
            className={cn(
              buttonVariants({ size: "sm" }),
              "call-now-pulse bg-[var(--coral-warm)] text-white hover:bg-[var(--coral-warm)]/90",
            )}
          >
            <span aria-hidden="true">📞</span> Call Now!
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav } from "@/content/nav";
import { contact, site } from "@/content/site";
import { cn } from "@/lib/utils";

function navLinkClass(href: string, pathname: string | null) {
  const active = pathname === href;
  return `rounded-lg px-2.5 py-1.5 text-sm font-semibold transition duration-200 ease-out lg:px-3 ${
    active
      ? "bg-primary/10 text-primary"
      : "text-foreground/85 hover:bg-muted hover:text-foreground"
  }`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const woodlands = "/in-home-pediatric-speech-therapy-the-woodlands";
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = (
    <>
      {mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={navLinkClass(item.href, pathname)}
        >
          {item.label}
        </Link>
      ))}
      <Link href={woodlands} className={navLinkClass(woodlands, pathname)}>
        Woodlands
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group min-w-0 shrink leading-tight">
          <span className="block truncate font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {site.name}
          </span>
          <span className="block text-xs font-semibold tracking-wide text-muted-foreground">
            Pediatric speech therapy — in your home
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-0.5 md:flex lg:gap-1"
        >
          {navLinks}
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
                <Link
                  href={woodlands}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-muted",
                    pathname === woodlands ? "text-primary" : "text-foreground",
                  )}
                >
                  The Woodlands
                </Link>
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
              "bg-[var(--coral-warm)] text-white hover:bg-[var(--coral-warm)]/90",
            )}
          >
            Call
          </a>
        </div>
      </div>
    </header>
  );
}

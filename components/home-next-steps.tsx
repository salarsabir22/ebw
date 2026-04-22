import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { images } from "@/content/images";

const cards = [
  {
    href: "/about",
    title: "Meet Verda",
    blurb: "Credentials, specialties, and how we collaborate with your team.",
    image: images.siteSessionA,
  },
  {
    href: "/services",
    title: "Services",
    blurb: "Evaluations, in-home sessions, parent coaching, and IEP support.",
    image: images.servicesHero,
  },
  {
    href: "/pricing",
    title: "Pricing",
    blurb: "Transparent rates, bundles, and travel policy for Northwest Houston.",
    image: images.siteBanner,
  },
  {
    href: "/contact",
    title: "Contact",
    blurb: "Send a message or call—we’ll help you with next steps.",
    image: images.contactSupport,
  },
] as const;

export function HomeNextSteps() {
  return (
    <section className="border-b border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Where to next?
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Each topic has its own page—so you can bookmark, share, or print only
          what you need.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <li key={card.href}>
              <Link href={card.href} className="block h-full">
                <Card className="h-full overflow-hidden py-0 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-soft-strong)]">
                  <div className="relative aspect-[5/3] w-full">
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="font-display text-lg text-foreground">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {card.blurb}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 pb-4">
                    <span className="text-sm font-semibold text-primary">
                      View page →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
} from "lucide-react";
import { site } from "@/lib/site";
import AboutIntro from "@/components/AboutIntro";
import StatsBand from "@/components/StatsBand";
import ServicesPreview from "@/components/ServicesPreview";
import FaqSection from "@/components/FaqSection";
import WhoIWorkWith from "@/components/WhoIWorkWith";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-beige">
        <div className="mx-auto grid max-w-[90rem] items-center gap-10 px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 md:grid-cols-[1fr_auto] md:gap-10 lg:gap-12 lg:px-8 lg:pb-12 lg:pt-20">
          <div className="min-w-0 lg:-translate-y-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark min-[400px]:text-xs min-[400px]:tracking-[0.25em] sm:text-sm">
              {site.tagline} · Patna
            </p>
            <h1 className="mt-4 font-display text-[1.6rem] font-normal leading-[1.15] sm:leading-[1.1] min-[400px]:text-4xl text-forest sm:text-5xl lg:text-[3.25rem]">
              <span className="text-gold-dark">CA</span> {site.shortName}
            </h1>
            <p className="mt-4 text-base font-semibold text-forest/80 sm:text-lg">
              {site.headline}
            </p>
            <span aria-hidden="true" className="mt-7 block h-0.5 w-24 bg-gold" />
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px] lg:text-base">
              End-to-end Chartered Accountancy, from ITR and GST to audit,
              accounting, company &amp; LLP registration and financial advisory,
              for individuals and businesses, handled directly by a qualified CA.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:flex sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-forest px-6 py-3 font-semibold text-ivory transition-colors hover:bg-terracotta"
              >
                Get in touch <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border-2 border-forest px-6 py-3 font-semibold text-forest transition-colors hover:border-terracotta hover:text-terracotta"
              >
                Our services
              </Link>
            </div>
          </div>

          {/* Hero photo in a square with an offset gold frame behind it */}
          <div className="relative z-10 mb-4 mr-3 sm:mb-6 sm:mr-5 md:mb-5 md:w-[19rem] lg:mb-0 lg:mr-10 lg:w-[26rem] lg:self-end lg:translate-y-[calc(25%+3rem)] xl:mr-16 xl:w-[32rem]">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-lg border-2 border-gold sm:translate-x-5 sm:translate-y-5"
            />
            <div className="relative aspect-[1323/1189] overflow-hidden rounded-lg border border-forest/10 bg-ivory shadow-[0_12px_32px_rgba(38,61,53,0.14)]">
              <Image
                src="/hero222.png"
                alt="Wooden blocks with tax and growth icons rising beside a calculator and scales of justice"
                fill
                priority
                sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 26rem, (min-width: 768px) 19rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About intro */}
      <AboutIntro />

      {/* Stats */}
      <StatsBand />

      {/* Services preview */}
      <ServicesPreview />

      {/* Who I work with */}
      <WhoIWorkWith />

      {/* FAQ */}
      <FaqSection />
    </main>
  );
}

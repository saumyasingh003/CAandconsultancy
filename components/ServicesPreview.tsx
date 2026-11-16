import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ClipboardCheck, FileText, PiggyBank, Receipt } from 'lucide-react'

// Top 4 services for the home page. The full list lives on /services.
const cards = [
  {
    icon: FileText,
    slug: 'itr-filing',
    title: 'Income Tax Return (ITR) Filing',
    points: [
      'Salaried, business & professional ITRs',
      'Capital gains & other income',
      'Refund follow-up & revised returns',
    ],
  },
  {
    icon: Receipt,
    slug: 'gst-registration-returns',
    title: 'GST Registration & Return Filing',
    points: [
      'New GST registration & amendments',
      'GSTR-1, GSTR-3B & annual returns',
      'Input tax credit reconciliation',
    ],
  },
  {
    icon: PiggyBank,
    slug: 'tax-planning',
    title: 'Tax Planning & Consultancy',
    points: [
      'Old vs new tax regime comparison',
      'Tax-saving investment planning',
      'Help with notices & assessments',
    ],
  },
  {
    icon: ClipboardCheck,
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    points: [
      'Tax audit under Section 44AB',
      'Statutory & internal audits',
      'Internal control reviews',
    ],
  },
]

const ServicesPreview = () => {
  return (
    <section className="mx-auto max-w-[90rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div>
          <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            Our Services <span aria-hidden="true" className="h-0.5 w-12 bg-gold" />
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[1.6rem] font-normal leading-[1.15] sm:leading-[1.1] min-[400px]:text-4xl text-forest sm:text-5xl lg:text-[3.25rem]">
            Complete Tax &amp; Financial Solutions
          </h2>
        </div>
        <div className="max-w-sm lg:pb-2">
          <p className="text-xs leading-relaxed text-muted-foreground">
            From your yearly ITR to GST compliance and audits, I handle the details personally, so
            you stay compliant, save tax where the law allows, and never miss a deadline.
          </p>
          <Link
            href="/services"
            className="group/all mt-5 inline-flex items-center gap-6 border-b border-gold/60 pb-3 pr-1 font-display text-sm uppercase tracking-[0.3em] text-gold-dark transition-colors hover:border-terracotta hover:text-terracotta"
          >
            All Services
            <ArrowUpRight
              className="size-4 transition-transform group-hover/all:-translate-y-0.5 group-hover/all:translate-x-0.5"
              strokeWidth={1.75}
            />
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ icon: Icon, slug, title, points }) => (
          <article
            key={title}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white transition-shadow hover:shadow-[0_12px_32px_rgba(38,61,53,0.12)]"
          >
            <div className="flex flex-col justify-between gap-6 p-6 sm:min-h-56 sm:gap-10 sm:p-7">
              <Icon
                className="hidden size-12 text-terracotta transition-transform group-hover:-translate-y-1 sm:block"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <h3 className="font-display text-2xl leading-snug text-forest lg:text-[1.65rem]">{title}</h3>
            </div>

            <div className="flex flex-1 flex-col bg-beige/70 p-6 sm:p-7">
              <ul className="mb-8 space-y-3 text-[15px] leading-relaxed text-forest/80">
                {points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${slug}`}
                className="mt-auto flex w-full items-center justify-center gap-3 rounded-md bg-forest px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-terracotta"
                aria-label={`Learn more about ${title}`}
              >
                Learn More <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesPreview

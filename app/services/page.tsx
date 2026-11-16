import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { services, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services | CA Sudhanshu Martand',
  description:
    'ITR filing, GST registration & returns, tax planning, audit, accounting, company & LLP registration and financial advisory by CA Sudhanshu Martand in Patna.',
}

const steps = [
  { title: 'Share Your Needs', text: 'Call, WhatsApp or visit the office and tell me what you need help with.' },
  { title: 'Review & Plan', text: 'I go through your documents and explain the best way forward, clearly.' },
  { title: 'Filing & Execution', text: 'Returns, registrations or audits are completed accurately and on time.' },
  { title: 'Ongoing Support', text: 'Reminders for due dates and help whenever questions or notices come up.' },
]

const pad = (n: number) => String(n).padStart(2, '0')

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHeader title="Services" />

      {/* Intro */}
      <section className="mx-auto max-w-[90rem] px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
              What I Offer <span aria-hidden="true" className="h-0.5 w-12 bg-gold" />
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[1.6rem] font-normal leading-[1.15] sm:leading-[1.1] min-[400px]:text-4xl text-forest sm:text-5xl lg:text-[3.25rem]">
              Every Tax &amp; Compliance Need, <span className="text-terracotta">Under One Roof</span>
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-muted-foreground lg:pb-2">
            Seven core services for individuals, professionals and businesses, each handled
            personally, explained clearly and delivered on time.
          </p>
        </div>
      </section>

      {/* Services grid: simple boxes, each linking to its detail page */}
      <section className="mx-auto max-w-[90rem] px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-28 lg:pt-14">
        <div className="flex flex-wrap justify-center gap-5">
          {services.map(({ slug, title, text }, i) => {
            return (
              <article
                key={slug}
                className="group relative flex w-full flex-col rounded-xl border border-border bg-white p-6 transition-all sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] xl:w-[calc(25%-0.9375rem)] duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_14px_36px_rgba(38,61,53,0.10)]"
              >
                <span className="absolute right-6 top-6 font-display text-2xl leading-none text-gold/70">{pad(i + 1)}</span>
                <h3 className="pr-12 font-display text-xl leading-snug text-forest">{title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <div className="mt-auto pt-6">
                  <Link
                    href={`/services/${slug}`}
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-forest px-4 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-terracotta"
                    aria-label={`View details: ${title}`}
                  >
                    View Details <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[90rem] px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            How It Works <span aria-hidden="true" className="h-0.5 w-12 bg-gold" />
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[1.6rem] font-normal leading-[1.15] sm:leading-[1.1] min-[400px]:text-4xl text-forest sm:text-5xl">
            Simple, Clear, <span className="text-terracotta">On Time</span>
          </h2>

          <ol className="relative mt-7 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-8">
            <span
              aria-hidden="true"
              className="absolute left-7 right-7 top-7 hidden border-t border-dashed border-gold/60 lg:block"
            />
            {steps.map(({ title, text }, i) => (
              <li key={title} className="relative flex gap-4 sm:block">
                <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-ivory font-display text-lg text-forest sm:size-14 sm:text-xl">
                  {pad(i + 1)}
                </span>
                <div>
                  <h3 className="font-display text-xl text-forest sm:mt-6 sm:text-2xl">{title}</h3>
                  <p className="mt-1 max-w-xs text-sm leading-relaxed text-muted-foreground sm:mt-2 sm:text-base">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing band */}
      <section className="bg-forest">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-6 px-4 py-10 sm:gap-8 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
          <div>
            <h2 className="font-display text-[1.6rem] leading-tight text-ivory sm:text-4xl">Not sure which service you need?</h2>
            <p className="mt-3 max-w-xl text-sm text-beige/80 sm:text-base">
              Tell me about your situation and I&apos;ll point you in the right direction. {site.closing}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 lg:flex lg:shrink-0">
            <a
              href={`https://wa.me/91${site.phones[0]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-forest transition-colors hover:bg-ivory"
            >
              <MessageCircle className="size-4" /> WhatsApp Me
            </a>
            <a
              href={`tel:+91${site.phones[0]}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ivory/40 px-6 py-2.5 font-semibold text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <Phone className="size-4" /> Call +91 {site.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

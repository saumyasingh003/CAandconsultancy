import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CalendarClock, Check, FileCheck2, Info, Minus, MessageCircle, Phone, Plus, UserCheck } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { services, site } from '@/lib/site'
import { serviceDetails } from '@/lib/service-details'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} | ${site.name}`,
    description: service.text,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const index = services.findIndex((s) => s.slug === slug)
  if (index === -1) notFound()

  const service = services[index]
  const others = services.filter((s) => s.slug !== service.slug)
  const details = serviceDetails[service.slug]
  const enquiry = encodeURIComponent(`Hello ${site.name}, I'd like to know more about ${service.title}.`)

  return (
    <main className="flex-1">
      <PageHeader title={service.title} parents={[{ label: 'Services', href: '/services' }]} />

      <section className="mx-auto grid max-w-[90rem] gap-12 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-10">
        {/* Main content */}
        <div className="lg:col-span-8">
          <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            Service {String(index + 1).padStart(2, '0')}
            <span aria-hidden="true" className="h-0.5 w-12 bg-gold" />
          </p>

          <h2 className="mt-4 font-display text-[1.6rem] font-normal leading-[1.15] sm:leading-[1.1] min-[400px]:text-4xl text-forest sm:text-5xl">
            {service.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{service.text}</p>

          {/* What's included */}
          <div className="mt-8 rounded-xl border border-border bg-ivory px-6 py-5 sm:px-7 sm:py-6">
            <h3 className="font-display text-xl text-forest sm:text-2xl">What&apos;s Included</h3>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-forest/85">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-forest text-gold">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {details && (
            <>
              {/* Who needs this */}
              <div className="mt-14">
                <h3 className="flex items-center gap-3 font-display text-2xl text-forest">
                  <UserCheck className="size-6 text-terracotta" strokeWidth={1.5} aria-hidden="true" />
                  Who Needs This
                </h3>
                <ul className="mt-6 space-y-3">
                  {details.whoNeeds.map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-relaxed text-forest/85">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents */}
              <div className="mt-14">
                <h3 className="flex items-center gap-3 font-display text-2xl text-forest">
                  <FileCheck2 className="size-6 text-terracotta" strokeWidth={1.5} aria-hidden="true" />
                  Documents Usually Required
                </h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {details.documents.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 rounded-lg border border-border bg-white px-4 py-3 text-[15px] text-forest/85"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-terracotta" strokeWidth={2.5} aria-hidden="true" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key due dates */}
              <div className="mt-14">
                <h3 className="flex items-center gap-3 font-display text-2xl text-forest">
                  <CalendarClock className="size-6 text-terracotta" strokeWidth={1.5} aria-hidden="true" />
                  Key Due Dates
                </h3>
                <div className="mt-6 overflow-hidden rounded-xl border border-border">
                  {details.dueDates.map(({ label, date }, i) => (
                    <div
                      key={label}
                      className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                        i % 2 === 0 ? 'bg-ivory' : 'bg-white'
                      }`}
                    >
                      <span className="text-[15px] text-forest/85">{label}</span>
                      <span className="shrink-0 font-display text-lg text-terracotta">{date}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Due dates are for a typical financial year and are sometimes extended by the government.
                </p>
              </div>

              {/* Service FAQs */}
              <div className="mt-14">
                <h3 className="font-display text-2xl text-forest">Common Questions</h3>
                <div className="mt-4 border-t border-border">
                  {details.faqs.map(({ q, a }) => (
                    <details key={q} name={`faq-${service.slug}`} className="group border-b border-border">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                        <span className="font-display text-lg leading-snug text-forest transition-colors group-hover:text-terracotta sm:text-xl">
                          {q}
                        </span>
                        <Plus className="mt-1 size-5 shrink-0 text-gold group-open:hidden" aria-hidden="true" />
                        <Minus className="mt-1 hidden size-5 shrink-0 text-gold group-open:block" aria-hidden="true" />
                      </summary>
                      <p className="pb-5 pr-10 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Why work with me */}
          <div className="mt-14">
            <h3 className="font-display text-2xl text-forest">Why Work With Me</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {[
                { t: 'Direct Access', d: 'You deal with me personally, not a junior or a call centre.' },
                { t: 'Clear Advice', d: 'Plain-language explanations so you always know where you stand.' },
                { t: 'On Time', d: 'Deadlines tracked and filings done well before due dates.' },
              ].map(({ t, d }) => (
                <div key={t} className="border-l-2 border-gold pl-4">
                  <p className="font-semibold text-forest">{t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-12 flex items-start gap-3 rounded-lg bg-beige/60 px-5 py-4 text-xs leading-relaxed text-forest/70">
            <Info className="mt-0.5 size-4 shrink-0 text-terracotta" aria-hidden="true" />
            This page gives general information only. Tax and compliance rules change with each
            Budget and government notification, so please get in touch for advice specific to your
            situation.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:col-span-4">
          <div className="rounded-xl bg-forest p-7 text-ivory sm:p-8 lg:sticky lg:top-28">
            <h3 className="font-display text-2xl">Need help with this?</h3>
            <p className="mt-2 text-sm leading-relaxed text-beige/80">
              Send a quick message or call. I&apos;ll explain what&apos;s needed for your case.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`https://wa.me/91${site.phones[0]}?text=${enquiry}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 font-semibold text-forest transition-colors hover:bg-ivory"
              >
                <MessageCircle className="size-4" /> WhatsApp Me
              </a>
              <a
                href={`tel:+91${site.phones[0]}`}
                className="flex items-center justify-center gap-2 rounded-md border-2 border-ivory/30 px-5 py-2.5 font-semibold text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                <Phone className="size-4" /> +91 {site.phones[0]}
              </a>
            </div>

            <div className="mt-8 border-t border-ivory/15 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Other Services</p>
              <ul className="mt-4 space-y-1">
                {others.map(({ slug, title }) => (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      className="group flex items-center justify-between gap-3 rounded-md py-2 text-sm text-beige/85 transition-colors hover:text-gold"
                    >
                      {title}
                      <ArrowRight className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}

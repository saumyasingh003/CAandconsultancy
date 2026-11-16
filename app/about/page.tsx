import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { services, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us | CA Sudhanshu Martand',
  description:
    'Meet CA Sudhanshu Martand, a Chartered Accountant in Patna offering ITR filing, GST, tax planning, audit, accounting, company & LLP registration and financial advisory.',
}

const values = [
  {
    title: 'Integrity',
    text: 'Honest advice, even when it is not what you hoped to hear. Every filing is done by the book.',
  },
  {
    title: 'Clarity',
    text: 'Tax and compliance explained in plain language, so you always understand what is happening and why.',
  },
  {
    title: 'Timeliness',
    text: 'Due dates tracked for you, with reminders well in advance and no last-minute rush.',
  },
  {
    title: 'Confidentiality',
    text: 'Your financial information is handled with care and never shared without your consent.',
  },
]

const pad = (n: number) => String(n).padStart(2, '0')
// Keeps 01 to 04 order when the two columns collapse into one on phones
const mobileOrder = ['order-1', 'order-2', 'order-3', 'order-4']

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
    {children} <span aria-hidden="true" className="h-0.5 w-12 bg-gold" />
  </p>
)

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-x-clip">
      <PageHeader title="About Us" />

      {/* 1. Intro: tall photo left, text dropped lower on the right */}
      <section className="mx-auto grid max-w-[90rem] gap-14 px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-28 lg:pt-16">
        <div className="relative lg:col-span-5">
          <div
            aria-hidden="true"
            className="absolute inset-0 -translate-x-3 translate-y-3 rounded-2xl border-2 border-gold sm:-translate-x-5 sm:translate-y-5"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(38,61,53,0.18)]">
            <Image
              src="/hero3-cropped.png"
              alt="Chartered accountant working on client documents at his office desk"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[35%_center]"
            />
          </div>

          {/* Name card overlapping the photo */}
          <div className="relative -mt-14 ml-auto mr-4 w-fit rounded-xl bg-forest px-6 py-5 text-ivory shadow-[0_16px_40px_rgba(38,61,53,0.3)] sm:mr-8 lg:absolute lg:-bottom-10 lg:-right-10 lg:m-0">
            <p className="whitespace-nowrap font-display text-xl leading-tight sm:text-2xl">
              <span className="text-gold">CA</span> {site.shortName}
            </p>
            <p className="mt-1 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em] text-beige/75 sm:text-xs sm:tracking-[0.2em]">
              {site.tagline} · Patna
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-24">
          <Label>About Me</Label>
          <h2 className="mt-4 font-display text-[1.6rem] font-normal leading-[1.15] sm:leading-[1.1] min-[400px]:text-4xl text-forest sm:text-5xl lg:text-[3.25rem]">
            A Chartered Accountant Who Knows You <span className="text-terracotta">by Name</span>
          </h2>
          <p className="mt-3 text-sm font-semibold text-forest/80 sm:mt-4 sm:text-base lg:text-lg">{site.headline}</p>
          <span aria-hidden="true" className="mt-5 block h-0.5 w-24 bg-gold sm:mt-7" />

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:mt-7 sm:space-y-5 sm:text-[15px] lg:text-base">
            <p>
              I&apos;m <strong className="font-semibold text-forest">{site.name}</strong>, a Chartered
              Accountant practising in Patna. I work with salaried individuals, professionals,
              traders, startups and companies on everything from their yearly ITR to GST, audits,
              accounting and company registration.
            </p>
            <p>
              I set up my practice with a simple idea: people deserve a CA they can actually talk
              to. When you work with me, you deal with me directly, from the first conversation to
              the final filing, and you always know what is being done and why.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:mt-9 sm:flex sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-forest px-6 py-3 font-semibold text-ivory transition-colors hover:bg-terracotta"
            >
              Get in touch <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border-2 border-forest px-6 py-2.5 font-semibold text-forest transition-colors hover:border-terracotta hover:text-terracotta"
            >
              My services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Approach statement, pushed right with an oversized quote mark */}
      <section className="bg-beige">
        <div className="mx-auto grid max-w-[90rem] px-4 pb-14 pt-20 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="relative lg:col-span-9 lg:col-start-3">
            <span
              aria-hidden="true"
              className="absolute -left-1 -top-12 font-display text-[6rem] leading-none text-gold/50 sm:-left-2 sm:-top-20 sm:text-[12rem] lg:-left-24"
            >
              &ldquo;
            </span>
            <Label>My Approach</Label>
            <p className="relative mt-5 font-display text-[1.6rem] leading-[1.3] text-forest sm:mt-6 sm:text-4xl sm:leading-[1.25] lg:text-[2.75rem]">
              Good financial advice should be <span className="text-terracotta">clear</span>,{' '}
              <span className="text-terracotta">honest</span> and{' '}
              <span className="text-terracotta">on time</span>. My job is to take the stress out of
              tax and compliance, so you can focus on your family, your career or your business.
            </p>
            <p className="mt-8 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-forest/70">
              <span aria-hidden="true" className="h-px w-10 bg-forest/40" />
              {site.name}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Values: staggered cards */}
      <section className="mx-auto max-w-[90rem] px-4 pb-10 pt-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label>What I Stand For</Label>
            <h2 className="mt-4 font-display text-[1.6rem] font-normal leading-[1.15] sm:leading-[1.1] min-[400px]:text-4xl text-forest sm:text-5xl">
              Four Promises to Every Client
            </h2>
          </div>
          {/* Two independent columns; the right one starts lower for the staggered look */}
          <div className="grid gap-5 sm:grid-cols-2 sm:items-start lg:col-span-8">
            {[
              [0, 2],
              [1, 3],
            ].map((column, c) => (
              <div key={c} className={`contents sm:flex sm:flex-col sm:gap-5 ${c === 1 ? 'sm:pt-12' : ''}`}>
                {column.map((i) => {
                  const { title, text } = values[i]
                  // 01 and 04 are green by default (diagonal pair); the others turn green on hover
                  const dark = i === 0 || i === 3
                  return (
                    <article
                      key={title}
                      className={`group rounded-xl border p-7 transition-all duration-300 ${mobileOrder[i]} sm:order-none ${
                        dark
                          ? 'border-forest bg-forest shadow-[0_18px_40px_rgba(38,61,53,0.22)] hover:shadow-[0_24px_50px_rgba(38,61,53,0.32)]'
                          : 'border-border bg-white hover:border-forest hover:bg-forest hover:shadow-[0_18px_40px_rgba(38,61,53,0.25)]'
                      }`}
                    >
                      <span
                        className={`font-display text-4xl leading-none transition-colors duration-300 ${
                          dark ? 'text-gold' : 'text-gold/80 group-hover:text-gold'
                        }`}
                      >
                        {pad(i + 1)}
                      </span>
                      <h3
                        className={`mt-4 font-display text-xl transition-colors duration-300 sm:mt-5 sm:text-2xl ${
                          dark ? 'text-ivory' : 'text-forest group-hover:text-ivory'
                        }`}
                      >
                        {title}
                      </h3>
                      <p
                        className={`mt-2 text-sm leading-relaxed transition-colors duration-300 sm:text-[15px] ${
                          dark ? 'text-beige/85' : 'text-muted-foreground group-hover:text-beige/85'
                        }`}
                      >
                        {text}
                      </p>
                    </article>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services: sticky heading left, numbered rows right */}
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-[90rem] gap-6 px-4 pb-12 pt-10 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Label>What I Help With</Label>
              <h2 className="mt-4 font-display text-[1.6rem] font-normal leading-[1.15] sm:leading-[1.1] min-[400px]:text-4xl text-forest sm:text-5xl">
                Seven Services, <span className="text-terracotta">One Trusted CA</span>
              </h2>
              <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
                Whatever you need, it is handled personally, from start to finish.
              </p>
            </div>
          </div>

          <ol className="border-t border-forest/15 lg:col-span-8">
            {services.map(({ slug, title, text }, i) => (
              <li key={slug} className="border-b border-forest/15">
                <Link
                  href={`/services/${slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 py-6 sm:gap-8 sm:py-7"
                >
                  <span className="font-display text-2xl leading-none text-gold sm:text-3xl">{pad(i + 1)}</span>
                  <span>
                    <span className="block font-display text-xl leading-snug text-forest transition-colors group-hover:text-terracotta sm:text-2xl">
                      {title}
                    </span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-muted-foreground sm:text-sm">{text}</span>
                  </span>
                  <span className="mt-1 flex size-10 items-center justify-center rounded-full border border-forest/20 text-forest transition-all duration-300 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-ivory">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Closing band */}
      <section className="bg-forest">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
          <h2 className="max-w-2xl font-display text-[1.6rem] leading-tight text-ivory sm:text-4xl lg:text-5xl">
            {site.closing}
          </h2>
          <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 lg:flex lg:shrink-0">
            <a
              href={`https://wa.me/91${site.phones[0]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-forest transition-colors hover:bg-ivory"
            >
              <MessageCircle className="size-4" /> WhatsApp Me
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ivory/40 px-6 py-2.5 font-semibold text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              Contact Page <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

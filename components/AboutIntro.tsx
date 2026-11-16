import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { site } from '@/lib/site'

const reasons = [
  'Direct, personal attention',
  'Clear and honest advice',
  'Timely filings & reminders',
  'Complete tax & compliance support',
]

// Home-page "About" section: photo with an overlapping "Why Choose Me?" card on the
// left, introduction text on the right. Written in first person for a single CA.
const AboutIntro = () => {
  return (
    <section className="mx-auto max-w-[90rem] px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-24">
      <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
        About Me <span aria-hidden="true" className="h-0.5 w-12 bg-gold" />
      </p>
      <h2 className="mt-4 max-w-3xl font-display text-[1.6rem] font-normal leading-[1.15] sm:leading-[1.1] min-[400px]:text-4xl text-forest sm:text-5xl lg:text-[3.25rem]">
        Personal Expertise, Professional Trust
      </h2>

      <div className="mt-7 grid items-start gap-10 sm:mt-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Photo + overlapping card */}
        <div className="relative sm:pb-40">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg sm:w-[85%]">
            <Image
              src="/hero3-cropped.png"
              alt="Chartered accountant working on client documents at his office desk"
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 85vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="relative mx-4 -mt-10 rounded-lg bg-beige p-6 shadow-[0_12px_32px_rgba(38,61,53,0.12)] sm:mx-0 sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-[17rem] sm:px-6 sm:pb-5 sm:pt-6">
            <h3 className="text-xl font-semibold text-forest">Why Choose Me?</h3>
            <ul className="mt-3 space-y-2 text-[15px]">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-forest/90">
                  <ArrowRight className="mt-1 size-4 shrink-0 text-terracotta" />
                  {reason}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-6 rounded-md bg-forest px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-terracotta"
            >
              More About Me <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Introduction */}
        <div className="lg:pt-4">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:text-[17px]">
            <p>
              I&apos;m <strong className="font-semibold text-forest">{site.name}</strong>, a Chartered
              Accountant based in Patna. I help individuals, professionals and businesses with
              income tax, GST, audit, accounting, company &amp; LLP registration and financial
              advisory, all under one roof.
            </p>
            <p>
              As an independent practice, every client works with me directly. You won&apos;t be
              passed between departments. You get one point of contact who understands your
              finances, answers your questions clearly and makes sure every filing is accurate
              and on time.
            </p>
            <p>
              My aim is to take the stress out of tax and compliance, so you can focus on your
              family, your career or your business, with practical advice that supports
              confident financial decisions.
            </p>
          </div>

          <div className="mt-10 rounded-lg border-l-4 border-terracotta bg-ivory p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-forest">Based in Patna, Here for You</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Visit me at my office in Priyadarshi Nagar, near DPS More, or simply call. Whether
              it&apos;s your first ITR or a growing company&apos;s compliance, you&apos;ll get
              dependable, personal service.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro

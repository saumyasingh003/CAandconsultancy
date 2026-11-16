import type { Metadata } from 'next'
import { MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us | CA Sudhanshu Martand',
  description:
    'Contact CA Sudhanshu Martand, Chartered Accountant in Patna. Call 7909003464 or 8651477026, or visit the office in Priyadarshi Nagar, near DPS More.',
}

const fullAddress = site.address.join(' ')
const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`
const whatsappUrl = `https://wa.me/91${site.phones[0]}`

const tileClass =
  'flex size-12 shrink-0 items-center justify-center rounded-lg bg-beige text-terracotta transition-colors duration-300 group-hover:bg-forest group-hover:text-gold'

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHeader title="Contact Us" />

      {/* Asymmetric intro + form */}
      <section className="mx-auto grid max-w-[90rem] gap-8 px-4 sm:gap-14 pb-16 pt-8 sm:px-6 sm:pt-12 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-16">
        {/* Left: intro + contact details (narrow column) */}
        <div className="lg:col-span-5">
          <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            Get in Touch <span aria-hidden="true" className="h-0.5 w-12 bg-gold" />
          </p>
          <h2 className="mt-4 font-display text-[1.6rem] font-normal leading-[1.15] sm:leading-[1.1] min-[400px]:text-4xl text-forest sm:text-5xl">
            Let&apos;s Build Your Financial Future <span className="text-terracotta">Together</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
            Whether it&apos;s your ITR, GST, an audit or setting up a company, call, message or visit
            the office. You&apos;ll speak with me directly.
          </p>

          <ul className="mt-7 space-y-3 sm:mt-10 sm:space-y-4">
            <li className="group flex gap-4 rounded-xl border border-border bg-white p-4 transition-shadow sm:p-5 hover:shadow-[0_12px_32px_rgba(38,61,53,0.08)]">
              <span className={tileClass}>
                <Phone className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">Call</p>
                <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
                  {site.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+91${phone}`}
                      className="whitespace-nowrap text-base text-forest transition-colors hover:text-terracotta sm:text-lg"
                    >
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </div>
            </li>

            <li className="group flex gap-4 rounded-xl border border-border bg-white p-4 transition-shadow sm:p-5 hover:shadow-[0_12px_32px_rgba(38,61,53,0.08)]">
              <span className={tileClass}>
                <MessageCircle className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">WhatsApp</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-base text-forest transition-colors hover:text-terracotta sm:text-lg"
                >
                  Chat on +91 {site.phones[0]}
                </a>
              </div>
            </li>

            <li className="group flex gap-4 rounded-xl border border-border bg-white p-4 transition-shadow sm:p-5 hover:shadow-[0_12px_32px_rgba(38,61,53,0.08)]">
              <span className={tileClass}>
                <MapPin className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">Office</p>
                <address className="mt-1 text-sm not-italic leading-relaxed text-forest sm:text-base">
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: form card (wider column, dropped lower for an asymmetric feel) */}
        <div className="lg:col-span-7 lg:pt-24">
          <div className="relative sm:mr-5 sm:mt-5">
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden -translate-y-5 translate-x-5 rounded-xl border-2 border-gold sm:block"
            />
            <div className="relative rounded-xl bg-forest p-5 shadow-[0_20px_50px_rgba(38,61,53,0.25)] sm:p-10">
              <h2 className="font-display text-2xl text-ivory sm:text-4xl">Send a Message</h2>
              <p className="mt-1.5 text-sm text-beige/80 sm:mt-2 sm:text-base">
                Share a few details and I&apos;ll get back to you as soon as possible.
              </p>
              <div className="mt-6 sm:mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map with overlapping address card */}
      <section className="relative">
        <iframe
          title={`Map showing the office of ${site.name}`}
          src={mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[380px] w-full border-0 grayscale-[25%] sm:h-[460px] lg:h-[540px]"
        />

        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-12 lg:px-8">
          <div className="-mt-16 relative rounded-xl bg-beige p-5 shadow-[0_20px_50px_rgba(38,61,53,0.2)] sm:p-9 lg:mt-0 lg:max-w-md">
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
              Visit the Office <span aria-hidden="true" className="h-0.5 w-10 bg-gold" />
            </p>
            <h3 className="mt-3 font-display text-2xl text-forest sm:text-3xl">{site.name}</h3>
            <address className="mt-3 not-italic leading-relaxed text-forest/80">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-6 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:flex sm:flex-wrap">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-forest px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-terracotta"
              >
                <Navigation className="size-4" /> Get Directions
              </a>
              <a
                href={`tel:+91${site.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-forest px-5 py-2.5 text-sm font-semibold text-forest transition-colors hover:border-terracotta hover:text-terracotta"
              >
                <Phone className="size-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-6 sm:h-12 lg:h-0" aria-hidden="true" />
    </main>
  )
}

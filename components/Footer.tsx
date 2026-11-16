import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/lib/site'
import CurrentYear from '@/components/CurrentYear'

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
]

const allSocials = [
  {
    label: 'LinkedIn',
    href: site.social.linkedin,
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452z',
  },
  {
    label: 'X',
    href: site.social.x,
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    label: 'YouTube',
    href: site.social.youtube,
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    label: 'Facebook',
    href: site.social.facebook,
    path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  },
]

const socials = allSocials.filter((s) => s.href)

// Stripes get thicker and closer together as they approach the footer body
const stripes = Array.from({ length: 16 }, (_, i) => ({
  height: 1 + i * 0.6,
  gap: 12 - i * 0.65,
}))

const headingClass = 'mb-5 text-sm font-semibold uppercase tracking-widest text-terracotta'
const linkClass = 'text-ivory/90 transition-colors hover:text-terracotta'

const Footer = () => {
  return (
    <footer className="mt-auto">
      {/* Striped transition band */}
      <div aria-hidden="true" className="flex flex-col">
        {stripes.map(({ height, gap }, i) => (
          <div key={i} className="bg-forest" style={{ height, marginTop: gap }} />
        ))}
      </div>

      <div className="bg-forest text-ivory">
        <div className="mx-auto grid max-w-[90rem] grid-cols-2 gap-x-8 gap-y-10 px-4 pb-12 pt-14 sm:px-6 md:grid-cols-3 lg:grid-cols-12 lg:px-8 lg:pt-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="rounded-lg bg-ivory px-2.5 py-2">
                <Image src="/logo-mark.png" alt="CA logo" width={640} height={365} className="h-8 w-auto" />
              </span>
              <span className="leading-tight">
                <span className="block text-xl font-extrabold tracking-tight">{site.shortName}</span>
                <span className="block whitespace-nowrap text-xs font-medium uppercase tracking-[0.15em] text-beige/80">
                  {site.tagline}
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-md leading-relaxed text-beige/85">{site.about}</p>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className={headingClass}>Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Contact</h3>
            <ul className="space-y-3">
              {site.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:+91${phone}`} className={`${linkClass} whitespace-nowrap`}>
                    +91 {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3">
            <h3 className={headingClass}>Address</h3>
            <address className="not-italic leading-relaxed text-ivory/90">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/15">
          <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
            <p className="text-sm text-beige/70">
              © <CurrentYear /> {site.name}. All rights reserved.
            </p>
            <p className="text-sm font-medium text-terracotta">{site.closing}</p>
            {socials.length > 0 && (
              <ul className="flex items-center gap-5">
                {socials.map(({ label, href, path }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ivory transition-colors hover:text-terracotta"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
                        <path d={path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { site } from '@/lib/site'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
]

const contactLink = { label: 'Contact Us', href: '/contact' }

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-forest/15 bg-beige/95 shadow-[0_2px_6px_rgba(38,61,53,0.12)] backdrop-blur">
      <nav className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-baseline gap-1.5" aria-label={`${site.name} home`}>
          <Image
            src="/logo-mark.png"
            alt="CA logo"
            width={640}
            height={365}
            priority
            className="h-8 w-auto min-[380px]:h-10"
          />
          <span className="whitespace-nowrap font-display text-lg font-normal leading-none text-forest min-[380px]:text-xl sm:text-2xl xl:text-[1.8rem]">
            {site.shortName}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
          {[...navLinks, contactLink].map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative py-1 font-display text-lg transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:rounded-full after:bg-terracotta after:transition-all after:duration-300 ${
                  isActive(href)
                    ? 'text-terracotta after:w-full'
                    : 'text-forest after:w-0 hover:text-terracotta hover:after:w-full'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-forest hover:bg-ivory lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="space-y-1 border-t border-border bg-ivory px-4 py-4 lg:hidden">
          {[...navLinks, contactLink].map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block border-l-2 px-4 py-3 font-display text-lg transition-colors ${
                  isActive(href)
                    ? 'border-terracotta text-terracotta'
                    : 'border-transparent text-forest hover:border-terracotta hover:text-terracotta'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar

'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { showTestimonials, testimonials } from '@/lib/site'

const AUTOPLAY_MS = 5000

// Round avatar: client photo if provided, otherwise initials
const Avatar = ({ name, photo }: { name: string; photo?: string }) => {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return photo ? (
    <Image
      src={photo}
      alt={name}
      width={96}
      height={96}
      className="size-10 shrink-0 rounded-full object-cover ring-2 ring-gold/60 ring-offset-2 ring-offset-ivory sm:size-11"
    />
  ) : (
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest font-display text-sm text-gold ring-2 ring-gold/60 ring-offset-2 ring-offset-ivory sm:size-11 sm:text-base"
    >
      {initials}
    </span>
  )
}

// Phones: swipeable slideshow with dots and autoplay. Tablet and up: three equal boxes.
const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const pausedRef = useRef(false)

  const goTo = useCallback((index: number) => {
    const track = trackRef.current
    const card = track?.children[index] as HTMLElement | undefined
    if (!track || !card) return
    track.scrollTo({ left: index * (card.offsetWidth + 16), behavior: 'smooth' })
  }, [])

  // Track which slide is in view
  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    const first = track.children[0] as HTMLElement | undefined
    if (!first) return
    const step = first.offsetWidth + 16
    setActive(Math.min(testimonials.length - 1, Math.max(0, Math.round(track.scrollLeft / step))))
  }

  // Autoplay on phones only, unless the user prefers reduced motion or is interacting
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const id = window.setInterval(() => {
      if (!mobile.matches || reduced.matches || pausedRef.current) return
      setActive((current) => {
        const next = (current + 1) % testimonials.length
        goTo(next)
        return next
      })
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [goTo])

  if (!showTestimonials || testimonials.length === 0) return null

  const pause = () => {
    pausedRef.current = true
  }
  const resume = () => {
    window.setTimeout(() => {
      pausedRef.current = false
    }, AUTOPLAY_MS)
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[90rem] px-4 pb-4 pt-12 sm:px-6 sm:pb-8 sm:pt-20 lg:px-8 lg:pb-10 lg:pt-28">
        <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
          Testimonials <span aria-hidden="true" className="h-0.5 w-12 bg-gold" />
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-[1.6rem] font-normal leading-[1.15] text-forest min-[400px]:text-4xl sm:text-5xl sm:leading-[1.1] lg:text-[3.25rem]">
          What Clients <span className="text-terracotta">Say</span>
        </h2>

        <div
          ref={trackRef}
          onScroll={onScroll}
          onTouchStart={pause}
          onTouchEnd={resume}
          onMouseEnter={pause}
          onMouseLeave={resume}
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] sm:mt-12 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible lg:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map(({ quote, name, role, photo }, i) => (
            <figure
              key={quote}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${testimonials.length}`}
              className="group flex w-full shrink-0 snap-center flex-col rounded-2xl border border-border bg-ivory p-5 transition-all duration-300 hover:border-gold/60 hover:shadow-[0_14px_36px_rgba(38,61,53,0.10)] md:w-auto md:hover:-translate-y-1 sm:px-7 sm:py-6"
            >
              <span aria-hidden="true" className="-mb-6 -mt-1 block font-display text-[3rem] leading-none text-gold sm:text-[3.5rem]">
                &ldquo;
              </span>
              <blockquote className="mb-4 text-sm leading-relaxed text-forest/85 sm:text-[15px] lg:text-base">
                {quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-3 sm:pt-4">
                <Avatar name={name} photo={photo} />
                <span>
                  <span className="block text-sm font-semibold text-forest sm:text-base">{name}</span>
                  <span className="block text-xs text-muted-foreground sm:text-sm">{role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Dots (phones only) */}
        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {testimonials.map((t, i) => (
            <button
              key={t.quote}
              type="button"
              onClick={() => {
                pause()
                goTo(i)
                resume()
              }}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={active === i}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? 'w-6 bg-forest' : 'w-2 bg-forest/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

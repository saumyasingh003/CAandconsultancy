'use client'

import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { services, site } from '@/lib/site'
import ServiceSelect from '@/components/ServiceSelect'

const serviceOptions = [...services.map((s) => s.title), 'Other']

const inputClass =
  'w-full rounded-md border border-ivory/20 bg-ivory/5 px-4 py-3 text-ivory placeholder:text-beige/50 outline-none transition focus:border-gold focus:bg-ivory/10 focus:ring-2 focus:ring-gold/30'

const labelClass = 'mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-beige/80'

// Small inline Indian flag for the phone prefix (flag emoji doesn't render on Windows)
const IndiaFlag = () => (
  <svg viewBox="0 0 30 20" className="h-3.5 w-[1.3rem] rounded-[2px] shadow-sm" aria-hidden="true">
    <rect width="30" height="20" fill="#fff" />
    <rect width="30" height="6.67" fill="#FF9933" />
    <rect y="13.33" width="30" height="6.67" fill="#138808" />
    <circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" strokeWidth="0.6" />
    <circle cx="15" cy="10" r="0.5" fill="#000080" />
  </svg>
)

// No backend or email yet, so the form opens WhatsApp with the enquiry pre-filled.
const ContactForm = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (key: string) => String(data.get(key) ?? '').trim()

    const lines = [`Hello ${site.name},`, '', `Name: ${get('name')}`, `Phone: +91 ${get('phone')}`]
    if (get('email')) lines.push(`Email: ${get('email')}`)
    if (get('service')) lines.push(`Service: ${get('service')}`)
    lines.push('', get('message'))

    const url = `https://wa.me/91${site.phones[0]}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name *
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone *
          </label>
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 flex items-center gap-2 border-r border-ivory/20 pl-4 pr-3 font-medium text-gold"
            >
              <IndiaFlag />
              +91
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              required
              autoComplete="tel-national"
              maxLength={10}
              pattern="[6-9][0-9]{9}"
              title="Enter a 10-digit Indian mobile number"
              placeholder="10-digit mobile number"
              aria-describedby="phone-prefix"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').slice(0, 10)
              }}
              className={`${inputClass} pl-[6rem]`}
            />
            <span id="phone-prefix" className="sr-only">
              Country code +91 is added automatically
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Optional"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            Service
          </label>
          <ServiceSelect id="service" name="service" options={serviceOptions} placeholder="Select a service" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell me briefly how I can help"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-3 rounded-md bg-gold px-7 py-3.5 font-semibold text-forest transition-colors hover:bg-ivory"
        >
          Send via WhatsApp <Send className="size-4" />
        </button>
        <p className="text-sm text-beige/70" aria-live="polite">
          {sent ? 'WhatsApp opened. Just tap send!' : 'Opens WhatsApp with your details filled in.'}
        </p>
      </div>
    </form>
  )
}

export default ContactForm

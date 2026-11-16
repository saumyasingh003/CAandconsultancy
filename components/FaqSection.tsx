import { Minus, Plus } from 'lucide-react'
import { site } from '@/lib/site'

// Keep answers general: thresholds and due dates change with each Budget and CBDT/CBIC
// notification, so review these once a year.
const faqs = [
  {
    q: 'Do I need to register for GST?',
    a: 'Generally, yes once your aggregate turnover crosses ₹40 lakh for supply of goods or ₹20 lakh for services (lower limits apply in some special-category states). Some businesses must register regardless of turnover, for example most inter-state suppliers of goods and many e-commerce sellers. Share your details and I’ll confirm what applies to you.',
  },
  {
    q: 'What is the due date for filing my Income Tax Return?',
    a: 'For most individuals whose accounts don’t need an audit, the ITR is due by 31 July after the end of the financial year. Taxpayers who require a tax audit usually have until 31 October. These dates are sometimes extended by the government, so it’s best to start early and avoid the last-minute rush and late fees.',
  },
  {
    q: 'When is a tax audit required?',
    a: 'A tax audit under Section 44AB generally applies when business turnover exceeds ₹1 crore (₹10 crore if almost all receipts and payments are digital), or when a professional’s gross receipts exceed ₹50 lakh. It can also apply if you opt out of a presumptive taxation scheme. I can review your numbers and tell you whether you need one.',
  },
  {
    q: 'I’ve received an income-tax or GST notice. What should I do?',
    a: 'Don’t panic, and don’t ignore it. Note the response deadline, then send me a copy of the notice along with your recent returns. Most notices ask for clarification or documents, and a timely, well-prepared reply usually resolves them without penalties.',
  },
  {
    q: 'Should I start a Private Limited Company or an LLP?',
    a: 'A Private Limited Company suits businesses planning to raise investment or grow quickly, while an LLP offers lower compliance costs and more flexibility for professional firms and smaller partnerships. Both give limited liability. The right choice depends on your plans, funding needs and number of partners, and I can walk you through it.',
  },
  {
    q: 'What documents do I need for ITR filing?',
    a: 'Typically your PAN, Aadhaar, Form 16 (if salaried), bank statements and interest certificates, your AIS / Form 26AS, proof of tax-saving investments, and statements for any capital gains or rental income. Don’t worry if something is missing: I’ll tell you exactly what’s needed for your case.',
  },
]

const FaqSection = () => {
  return (
    <section className="mx-auto grid max-w-[90rem] gap-6 px-4 pb-4 pt-10 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-[2fr_3fr] lg:gap-20 lg:px-8 lg:py-28">
      {/* Intro */}
      <div>
        <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
          FAQ <span aria-hidden="true" className="h-0.5 w-12 bg-gold" />
        </p>
        <h2 className="mt-4 font-display text-[1.6rem] font-normal leading-[1.15] sm:leading-[1.1] min-[400px]:text-4xl text-forest sm:text-5xl lg:text-[3.25rem]">
          Common Questions
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base lg:text-lg">
          Can&apos;t find your answer? Send a{' '}
          <a
            href={`https://wa.me/91${site.phones[0]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-terracotta"
          >
            WhatsApp message
          </a>{' '}
          and I&apos;ll reply.
        </p>
      </div>

      {/* Accordion: native <details> sharing a name, so only one is open at a time */}
      <div className="border-t border-border">
        {faqs.map(({ q, a }) => (
          <details key={q} name="faq" className="group border-b border-border">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-xl leading-snug text-forest transition-colors group-hover:text-terracotta sm:text-2xl">
                {q}
              </h3>
              <Plus className="mt-1 size-5 shrink-0 text-gold group-open:hidden" aria-hidden="true" />
              <Minus className="mt-1 hidden size-5 shrink-0 text-gold group-open:block" aria-hidden="true" />
            </summary>
            <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FaqSection

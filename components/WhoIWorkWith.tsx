import { Briefcase, Building2, House, Rocket, Store, User } from 'lucide-react'

// Client types, each tied to services CA Sudhanshu Martand offers.
const clients = [
  {
    icon: User,
    title: 'Salaried Individuals',
    text: 'ITR filing, old vs new regime choice, tax-saving plans and replies to tax notices.',
  },
  {
    icon: Briefcase,
    title: 'Professionals & Freelancers',
    text: 'Doctors, consultants and freelancers: ITR, advance tax, and GST where it applies.',
  },
  {
    icon: Store,
    title: 'Small Businesses & Traders',
    text: 'GST registration and returns, bookkeeping and accounts, kept in order every month.',
  },
  {
    icon: Rocket,
    title: 'Startups',
    text: 'Company or LLP registration, compliance from day one and practical financial advice.',
  },
  {
    icon: Building2,
    title: 'Companies & LLPs',
    text: 'Statutory and tax audits, accounting and ongoing compliance support.',
  },
  {
    icon: House,
    title: 'Investors & Property Owners',
    text: 'Capital gains, rental income and planning to keep more of what you earn.',
  },
]

const WhoIWorkWith = () => {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[90rem] px-4 pb-10 pt-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
          Who I Work With <span aria-hidden="true" className="h-0.5 w-12 bg-gold" />
        </p>
        <h2 className="mt-4 max-w-5xl font-display text-[1.6rem] font-normal leading-[1.15] sm:leading-[1.1] min-[400px]:text-4xl text-forest sm:text-5xl lg:text-[3.25rem]">
          From a single filing to <span className="whitespace-nowrap text-terracotta">year-round</span> support
        </h2>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {clients.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group flex gap-5 rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_14px_36px_rgba(38,61,53,0.10)] sm:p-7"
            >
              <div className="hidden size-14 shrink-0 items-center justify-center rounded-lg bg-beige sm:flex transition-colors duration-300 group-hover:bg-forest">
                <Icon
                  className="size-6 text-terracotta transition-colors duration-300 group-hover:text-gold"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="font-display text-xl leading-snug text-forest sm:text-[1.4rem]">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoIWorkWith

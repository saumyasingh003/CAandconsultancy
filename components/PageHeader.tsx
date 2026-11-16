import Link from 'next/link'

type Crumb = { label: string; href: string }

type PageHeaderProps = {
  title: string
  /** Optional middle breadcrumb levels between Home and the current page */
  parents?: Crumb[]
}

// Inner-page header: breadcrumb, divider line and page title.
const PageHeader = ({ title, parents = [] }: PageHeaderProps) => {
  const trail: Crumb[] = [{ label: 'Home', href: '/' }, ...parents]

  return (
    <section className="bg-beige">
      <div className="mx-auto max-w-[90rem] px-4 pb-5 pt-5 sm:px-6 sm:pb-7 sm:pt-7 lg:px-8 lg:pb-9 lg:pt-9">
        <nav aria-label="Breadcrumb" className="pb-3">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-forest/70 sm:text-sm">
            {trail.map(({ label, href }) => (
              <li key={href} className="flex items-center gap-2">
                <Link href={href} className="transition-colors hover:text-terracotta">
                  {label}
                </Link>
                <span aria-hidden="true">/</span>
              </li>
            ))}
            <li aria-current="page" className="text-forest">
              {title}
            </li>
          </ol>
        </nav>
        <div className="border-t border-forest/15 pt-4">
          <h1 className="font-display text-2xl font-normal leading-tight text-forest sm:text-[1.75rem]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default PageHeader

import { stats } from '@/lib/site'

const StatsBand = () => {
  return (
    <section className="bg-forest">
      <div className="mx-auto grid max-w-[90rem] grid-cols-2 gap-y-10 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-4 md:py-16 lg:px-8">
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className={`flex justify-center px-4 ${
              i % 2 === 1 ? 'border-l border-ivory/15' : ''
            } ${i > 0 ? 'md:border-l md:border-ivory/15' : ''}`}
          >
            <div>
              <p className="font-display text-4xl leading-none text-gold sm:text-5xl lg:text-6xl">{value}</p>
              <p className="mt-3 text-sm font-medium text-ivory sm:text-base lg:text-lg">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBand

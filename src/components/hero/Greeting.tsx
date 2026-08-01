import { hero } from '@/data/hero'

const Greeting = () => {
  return (
    <div className="z-10 flex flex-col gap-4">
      <div className="text-5xl">
        {hero.greeting}{' '}
        <span className="text-gradient-accent">{hero.name}</span>.
      </div>
      <div className="text-text-muted dark:text-dark-text-muted text-xl md:text-2xl">
        {hero.description}
      </div>
    </div>
  )
}

export default Greeting

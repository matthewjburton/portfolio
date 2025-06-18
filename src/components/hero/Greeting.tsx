import { hero } from '@/data/hero'

const Greeting = () => {
  return (
    <div className="z-10 text-5xl">
      <div>
        {hero.greeting}{' '}
        <span className="text-gradient-accent">{hero.name}</span>.
      </div>
      <div>{hero.description}</div>
    </div>
  )
}

export default Greeting

import { devicons } from './icons'

const IconRow = ({ reverse = false }: { reverse?: boolean }) => {
  // Repeat the icons twice for continuous scrolling effect
  const icons = [...devicons, ...devicons]

  return (
    <div className={`devicon-row ${reverse ? 'reverse' : 'forward'}`}>
      {icons.map((icon, i) => (
        <i key={`${icon} ${i.toString()}`} className={`${icon} text-8xl`} />
      ))}
    </div>
  )
}

export default IconRow

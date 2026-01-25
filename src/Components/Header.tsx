import { FadeInSection } from './FadeInSection'

interface HeaderProps {
  text: string
}

const Header = ({ text }: HeaderProps) => {
  return (
    <div className="self-center">
      <FadeInSection>
        <div className="text-gradient-accent border-b-8 py-4 text-5xl font-bold">
          {text}
        </div>
      </FadeInSection>
    </div>
  )
}

export { Header }

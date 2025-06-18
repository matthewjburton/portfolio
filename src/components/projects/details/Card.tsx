import FadeInSection from '@/components/FadeInSection'
import { Element } from 'react-scroll'

interface CardProps {
  children: React.ReactNode
  className?: string
  title: string
}

const Card = ({ children, className, title }: CardProps) => {
  return (
    <Element name={title}>
      <FadeInSection>
        <section
          className={`bg-container dark:bg-container-dark group flex h-full flex-col items-center justify-center overflow-hidden rounded-lg p-8 shadow-xl transition duration-300 ease-in-out ${className ?? ''}`}
        >
          <div className="flex h-full w-full flex-col items-center justify-between gap-4 rounded-lg p-4 lg:gap-8 lg:p-8">
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
                {title}
              </h2>

              {children}
            </div>
          </div>
        </section>
      </FadeInSection>
    </Element>
  )
}

export default Card

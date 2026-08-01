import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface FadeInSectionProps {
  children: React.ReactNode
}

const FadeInSection = ({ children }: FadeInSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true })
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      animate={
        inView ? (reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }) : {}
      }
      transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  )
}

export default FadeInSection

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface FadeInSectionProps {
  children: React.ReactNode
}

const FadeInSection = ({ children }: FadeInSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  )
}

export default FadeInSection

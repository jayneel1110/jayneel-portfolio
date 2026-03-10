import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-surface-400 max-w-xl mx-auto">{subtitle}</p>
      <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full" />
    </motion.div>
  )
}

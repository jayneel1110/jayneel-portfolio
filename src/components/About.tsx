import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'

const stats = [
  { label: 'Projects Built', value: '6+' },
  { label: 'Datasets Analyzed', value: '20+' },
  { label: 'Tools & Technologies', value: '10+' },
  { label: 'Certifications & Learning', value: '5+' },
]

const details = [
  { icon: MapPin, text: 'Mumbai, India' },
  { icon: Briefcase, text: 'Aspiring Data Analyst' },
  { icon: Calendar, text: 'Fresher' },
  { icon: GraduationCap, text: 'Computer Science / Data Analytics' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me and my journey in data analytics"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl rotate-3 opacity-20" />

              <div className="relative bg-surface-800 rounded-2xl overflow-hidden border border-surface-700/50">
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-surface-800 to-surface-900">
                  <span className="text-8xl">📊</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-surface-300 leading-relaxed mb-6">
              I'm an aspiring Data Analyst based in Mumbai with a strong interest in
              transforming raw data into meaningful insights. I enjoy analyzing
              datasets, identifying patterns, and building dashboards that help
              businesses make better data-driven decisions.
            </p>

            <p className="text-surface-300 leading-relaxed mb-8">
              I work with tools such as SQL, Python, Power BI, and AWS to clean,
              analyze, and visualize data. Through hands-on projects, I focus on
              solving real-world problems using analytics, machine learning, and
              cloud technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {details.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm">
                  <div className="p-2 bg-primary-500/10 rounded-lg">
                    <Icon size={16} className="text-primary-400" />
                  </div>
                  <span className="text-surface-300">{text}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface-800 hover:bg-surface-700 border border-surface-700 hover:border-surface-600 text-white font-medium rounded-xl transition-all duration-300"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-surface-900/50 border border-surface-800/50 rounded-2xl hover:border-primary-500/30 transition-colors duration-300"
            >
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-surface-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
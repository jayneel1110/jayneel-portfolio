import { motion } from 'framer-motion'
import { Database, BarChart3, Cloud, Wrench, Code } from 'lucide-react'
import SectionHeading from './SectionHeading'

const skillCategories = [
  {
    title: 'Languages & Databases',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Python', 'SQL', 'PostgreSQL', 'Excel'],
  },
  {
    title: 'Data Analysis',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    skills: [
      'Pandas',
      'NumPy',
      'Advanced Excel',
      'EDA',
      'Statistical Analysis',
      'ETL Pipelines',
    ],
  },
  {
    title: 'Visualization & BI',
    icon: BarChart3,
    color: 'from-purple-500 to-pink-500',
    skills: [
      'Power BI',
      'Dashboard Development',
      'KPI Reporting',
      'Data Storytelling',
    ],
  },
  {
    title: 'Cloud & Data Platforms',
    icon: Cloud,
    color: 'from-sky-500 to-indigo-500',
    skills: ['AWS RDS', 'AWS S3', 'Google Cloud Platform'],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    skills: ['VS Code', 'Jupyter Notebook', 'Git', 'GitHub'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-surface-900/30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="Tools and technologies I use for data analysis, visualization, and machine learning"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon

            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="group p-6 bg-surface-900/50 border border-surface-800/50 rounded-2xl hover:border-surface-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium text-surface-300 bg-surface-800/80 border border-surface-700/50 rounded-lg hover:border-primary-500/40 hover:text-primary-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
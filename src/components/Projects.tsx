import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'SmartCommute AI',
    description:
      'AI-powered traffic analytics platform that predicts Mumbai commute demand and congestion patterns using machine learning and PostgreSQL data pipelines. Includes Power BI dashboards with geospatial analysis highlighting high-demand zones like BKC and Andheri.',
    tech: ['Python', 'AWS', 'PostgreSQL', 'Power BI', 'Pandas', 'Excel'],
    github: 'https://github.com/jayneel1110/smartcommute_ai',
    live: '#',
    image: '🚦',
  },
  {
    title: 'PropSight — Mumbai Real Estate Intelligence',
    description:
      'Real estate analytics system modeling 5-year ROI projections across Mumbai localities. Uses Python data analysis and Power BI dashboards to identify undervalued properties and investment hotspots.',
    tech: ['Python', 'PostgreSQL', 'AWS', 'Power BI', 'Pandas'],
    github: 'https://github.com/jayneel1110/PropSIght-Mumbai-Real-Estate-Intelligence-System',
    live: '#',
    image: '🏠',
  },
  {
    title: 'RetainIQ — HR Attrition Intelligence Dashboard',
    description:
      'HR analytics platform analyzing 1,470 employee records to identify attrition drivers using SQL and Power BI. Revealed salary-driven attrition patterns and department-level risk insights to support retention strategies.',
    tech: ['SQL', 'Excel', 'Power BI', 'Data Analysis'],
    github: 'https://github.com/jayneel1110/HR-Analytics-Dashboard',
    live: '#',
    image: '📊',
  },
  {
    title: 'Global Sales Data Analysis',
    description:
      'Sales analytics project analyzing 10,000+ global transactions using Python to identify revenue trends and regional performance insights, highlighting APAC growth and EMEA decline.',
    tech: ['Python', 'Pandas', 'Data Visualization', 'Analytics'],
    github: 'https://github.com/jayneel1110/PythonEDA',
    live: '#',
    image: '💰',
  },
  {
    title: 'NBA Player Analytics Dashboard',
    description:
      'Interactive Power BI dashboard analyzing 450+ NBA player statistics including scoring, assists, rebounds, and advanced metrics. Uses DAX and data modeling to uncover performance insights.',
    tech: ['Power BI', 'PostgreSQL', 'Excel', 'DAX'],
    github: 'https://github.com/jayneel1110/NBA-2024-Player-Dashboard',
    live: '#',
    image: '🏀',
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

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Data analytics and machine learning projects showcasing real-world problem solving"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group flex flex-col bg-surface-900/50 border border-surface-800/50 rounded-2xl overflow-hidden hover:border-surface-700 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card header */}
              <div className="relative h-48 bg-gradient-to-br from-surface-800 to-surface-900 flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </span>

                <div className="absolute top-4 left-4">
                  <Folder size={18} className="text-surface-600" />
                </div>

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-surface-900/80 rounded-lg text-surface-400 hover:text-white"
                  >
                    <Github size={16} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-surface-900/80 rounded-lg text-surface-400 hover:text-white"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-surface-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium text-primary-400/80 bg-primary-500/10 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
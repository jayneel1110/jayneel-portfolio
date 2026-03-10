import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'
import SectionHeading from './SectionHeading'

import smartcommute from '../assets/projects/smartcommute.png'
import propsight from '../assets/projects/propsight.png'
import hr from '../assets/projects/hr.png'
import sales from '../assets/projects/sales.png'
import nba from '../assets/projects/nba.png'

const projects = [
  {
    title: 'SmartCommute AI',
    description:
      'AI-powered traffic analytics platform predicting Mumbai commute demand using ML and PostgreSQL pipelines with Power BI geospatial dashboards.',
    tech: ['Python', 'AWS', 'PostgreSQL', 'Power BI', 'Pandas'],
    github: 'https://github.com/jayneel1110/smartcommute_ai',
    live: '#',
    image: smartcommute,
  },
  {
    title: 'PropSight — Mumbai Real Estate Intelligence',
    description:
      'Real estate analytics system modeling 5-year ROI projections across Mumbai locations to identify undervalued investment opportunities.',
    tech: ['Python', 'PostgreSQL', 'AWS', 'Power BI', 'Pandas'],
    github: 'https://github.com/jayneel1110/PropSIght-Mumbai-Real-Estate-Intelligence-System',
    live: '#',
    image: propsight,
  },
  {
    title: 'RetainIQ — HR Attrition Intelligence Dashboard',
    description:
      'HR analytics dashboard analyzing 1,470 employee records to uncover attrition drivers and provide actionable workforce insights.',
    tech: ['SQL', 'Excel', 'Power BI', 'Analytics'],
    github: 'https://github.com/jayneel1110/HR-Analytics-Dashboard',
    live: '#',
    image: hr,
  },
  {
    title: 'Global Sales Data Analysis',
    description:
      'Sales analytics project analyzing 10,000+ global transactions to identify revenue trends and regional market performance.',
    tech: ['Python', 'Pandas', 'Data Visualization'],
    github: 'https://github.com/jayneel1110/PythonEDA',
    live: '#',
    image: sales,
  },
  {
    title: 'NBA Player Analytics Dashboard',
    description:
      'Interactive Power BI dashboard analyzing 450+ NBA player statistics with DAX metrics and performance insights.',
    tech: ['Power BI', 'PostgreSQL', 'Excel', 'DAX'],
    github: 'https://github.com/jayneel1110/NBA-2024-Player-Dashboard',
    live: '#',
    image: nba,
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
              className="group flex flex-col bg-surface-900/50 border border-surface-800/50 rounded-2xl overflow-hidden hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1"
            >

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="absolute top-4 left-4">
                  <Folder size={18} className="text-white/70" />
                </div>

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/60 backdrop-blur rounded-lg text-white hover:bg-black"
                  >
                    <Github size={16} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/60 backdrop-blur rounded-lg text-white hover:bg-black"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

              </div>

              {/* Card Body */}
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
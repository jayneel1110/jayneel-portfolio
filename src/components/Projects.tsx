import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionHeading from './SectionHeading'

import smartcommute from '../assets/projects/SmartCommute.png'
import propsight from '../assets/projects/PropSight.png'
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
    image: smartcommute,
  },
  {
    title: 'PropSight — Mumbai Real Estate Intelligence',
    description:
      'Real estate analytics system modeling 5-year ROI projections across Mumbai locations to identify undervalued investment opportunities.',
    tech: ['Python', 'PostgreSQL', 'AWS', 'Power BI', 'Pandas'],
    github:
      'https://github.com/jayneel1110/PropSIght-Mumbai-Real-Estate-Intelligence-System',
    image: propsight,
  },
  {
    title: 'RetainIQ — HR Attrition Intelligence Dashboard',
    description:
      'HR analytics dashboard analyzing 1,470 employee records to uncover attrition drivers and provide actionable workforce insights.',
    tech: ['SQL', 'Excel', 'Power BI', 'Analytics'],
    github: 'https://github.com/jayneel1110/HR-Analytics-Dashboard',
    image: hr,
  },
  {
    title: 'Global Sales Data Analysis',
    description:
      'Sales analytics project analyzing 10,000+ global transactions to identify revenue trends and regional market performance.',
    tech: ['Python', 'Pandas', 'Data Visualization'],
    github: 'https://github.com/jayneel1110/PythonEDA',
    image: sales,
  },
  {
    title: 'NBA Player Analytics Dashboard',
    description:
      'Interactive Power BI dashboard analyzing 450+ NBA player statistics with DAX metrics and performance insights.',
    tech: ['Power BI', 'PostgreSQL', 'Excel', 'DAX'],
    github: 'https://github.com/jayneel1110/NBA-2024-Player-Dashboard',
    image: nba,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          title="Featured Projects"
          subtitle="Data analytics and machine learning projects showcasing real-world problem solving"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group bg-surface-900/60 border border-surface-800 rounded-2xl overflow-hidden hover:border-primary-500/40 transition"
            >

              {/* Image Container */}
              <div className="relative p-4">

                <div className="rounded-xl overflow-hidden bg-black/40 border border-surface-800">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

              </div>

              {/* Content */}
              <div className="px-6 pb-6">

                <div className="flex items-start justify-between mb-2">

                  <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition">
                    {project.title}
                  </h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-surface-400 hover:text-white"
                  >
                    <Github size={18} />
                  </a>

                </div>

                <p className="text-sm text-surface-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-primary-500/10 text-primary-400 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
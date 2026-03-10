import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/jayneel1110',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/jayneel1110',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:jayneelpatil011@gmail.com',
    label: 'Email',
  },
]

export default function Footer() {
  return (
    <footer className="py-8 border-t border-surface-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Left Side */}
          <p className="text-sm text-surface-500 flex items-center gap-1">
            © {new Date().getFullYear()} Jayneel Patil — Data Analyst Portfolio
            <Heart size={14} className="text-red-500 fill-red-500 ml-1" />
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-surface-500 hover:text-primary-400 transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  )
}
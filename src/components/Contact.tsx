import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jayneelpatil011@gmail.com',
    href: 'mailto:jayneelpatil011@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai, India',
    href: '#',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  // FIXED TYPES HERE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // FIXED TYPES HERE
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  const inputClasses =
    'w-full px-4 py-3 bg-surface-800/50 border border-surface-700/50 rounded-xl text-white placeholder-surface-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all duration-200'

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-surface-900/30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Interested in collaborating, hiring, or discussing data projects? Let's connect."
        />

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-surface-400 leading-relaxed">
              I'm always open to discussing data analytics opportunities,
              interesting projects, or collaborations related to data,
              machine learning, and cloud analytics.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 bg-surface-900/50 border border-surface-800/50 rounded-xl hover:border-surface-700 transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary-500/10 rounded-xl group-hover:bg-primary-500/20 transition-colors">
                    <Icon size={20} className="text-primary-400" />
                  </div>

                  <div>
                    <div className="text-xs text-surface-500 uppercase tracking-wider">
                      {label}
                    </div>

                    <div className="text-sm text-surface-200">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-surface-300 mb-2">
                    Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-300 mb-2">
                    Email
                  </label>

                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-surface-300 mb-2">
                  Subject
                </label>

                <input
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Project Discussion"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-surface-300 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-600 hover:bg-primary-500 disabled:bg-primary-600/50 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
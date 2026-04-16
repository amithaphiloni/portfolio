import { motion } from 'framer-motion'
import { Download, GraduationCap, Shield, BookOpen } from 'lucide-react'

const timeline = [
  {
    icon: GraduationCap,
    date: '2023 — Present',
    title: 'B.Sc. in Computer Science',
    place: 'HIT — Holon Institute of Technology',
    points: [
      'GPA: 87',
      'Relevant Coursework: Data Structures, Algorithms, Object-Oriented Programming (OOP), Machine Learning, Operating Systems, Communication Networks.',
    ],
    accent: 'text-accent-cyan',
  },
  {
    icon: Shield,
    date: '2019 — 2022',
    title: 'Combat Fighter',
    place: 'Givati Brigade — IDF',
    points: [
      'Three years of mandatory military service as a combat soldier in the Givati Brigade.',
      'Built the discipline, resilience, and ownership I now bring into every engineering task.',
    ],
    accent: 'text-accent-emerald',
  },
  {
    icon: BookOpen,
    date: 'Graduated',
    title: 'High School Diploma',
    place: '"AMIRIM" High School',
    points: ['High School Diploma.'],
    accent: 'text-accent-violet',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          03. Where I've Been
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title mb-14"
        >
          Experience & <span className="gradient-text">Education</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

          <div className="space-y-12">
            {timeline.map((entry, i) => {
              const Icon = entry.icon
              const leftSide = i % 2 === 0
              return (
                <motion.div
                  key={entry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    leftSide ? '' : 'md:[&>div:first-child]:col-start-2'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 h-4 w-4 rounded-full bg-ink-950 border-2 border-accent-cyan shadow-glow-cyan" />

                  <div
                    className={`pl-12 md:pl-0 ${
                      leftSide ? 'md:pr-10 md:text-right' : 'md:pl-10 md:col-start-2'
                    }`}
                  >
                    <div className="glass-card p-6 hover:border-accent-cyan/40 transition-colors">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          leftSide ? 'md:justify-end' : ''
                        }`}
                      >
                        <Icon size={18} className={entry.accent} />
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                          {entry.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
                      <p className={`text-sm font-mono mb-3 ${entry.accent}`}>
                        {entry.place}
                      </p>
                      <ul
                        className={`space-y-1.5 text-sm text-zinc-400 ${
                          leftSide ? 'md:text-right' : ''
                        }`}
                      >
                        {entry.points.map((p) => (
                          <li key={p}>— {p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Download resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-ink-950 bg-gradient-to-r from-accent-cyan via-teal-300 to-accent-violet bg-[length:200%_auto] hover:bg-right transition-all duration-700 shadow-glow-cyan hover:shadow-glow-violet"
          >
            <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
            View Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

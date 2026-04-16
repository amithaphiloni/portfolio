import { motion } from 'framer-motion'

const skillGroups = [
  { label: 'Languages', items: ['TypeScript', 'Python', 'C', 'C++', 'Java'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'React'] },
  { label: 'Backend', items: ['Node.js', 'NestJS', 'REST APIs', 'JWT', 'bcrypt'] },
  { label: 'Databases', items: ['PostgreSQL', 'TypeORM', 'SQL'] },
  {
    label: 'Tools',
    items: ['GitHub', 'Linux', 'Docker (basic)', 'VSCode', 'PyCharm', 'Pytest', 'Postman'],
  },
  { label: 'Cloud & Deployment', items: ['AWS (S3)', 'Neon', 'Render'] },
]

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container grid md:grid-cols-[1.2fr_1fr] gap-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="section-eyebrow">
            01. About Me
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mb-6">
            Computer Science student, <span className="gradient-text">software engineer</span>.
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              Hello! I'm <span className="text-white">Amit Haphiloni</span>, a second-year
              Computer Science student at{' '}
              <span className="text-accent-cyan">HIT — Holon Institute of Technology</span>,
              currently holding a GPA of 87.
            </p>
            <p>
              I'm a fast learner with strong analytical skills and a passion for solving complex
              algorithmic problems. My coursework covers Data Structures, Algorithms,
              Object-Oriented Programming, Machine Learning, Operating Systems, and Communication
              Networks — and I pair that foundation with hands-on projects across full-stack
              web, machine learning, and system-level tooling.
            </p>
            <p>
              Before university, I served for three years as a combat fighter in the{' '}
              <span className="text-white">Givati Brigade (IDF, 2019–2022)</span>. I'm eager to
              bring my skills and creativity to impactful projects and contribute to a
              forward-thinking organization.
            </p>
          </motion.div>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-6 md:p-8 self-start"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan mb-6">
            Technical Skills
          </h3>
          <div className="space-y-5">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <p className="text-xs text-zinc-500 mb-2">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/5">
            <p className="text-xs text-zinc-500 mb-2">Languages</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03]">
                Hebrew — Native
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03]">
                English — Fluent
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

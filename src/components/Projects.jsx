import { motion } from 'framer-motion'
import { Github, ExternalLink, Folder } from 'lucide-react'
import { projects } from '../data/projects'

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          02. Things I've Built
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title mb-4"
        >
          Selected <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 max-w-2xl mb-14"
        >
          A mix of full-stack products, algorithmic experiments, and system-level tools.
          Each one taught me something I carry into the next.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="group glass-card p-6 flex flex-col h-full overflow-hidden"
            >
              {/* hover gradient */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative flex items-center justify-between mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-ink-900 text-accent-cyan group-hover:border-accent-cyan group-hover:-translate-y-1 transition-all">
                  <Folder size={22} />
                </div>
                <div className="flex items-center gap-3 text-zinc-500">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="hover:text-accent-cyan transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live"
                      className="hover:text-accent-cyan transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="relative text-xl font-semibold text-white group-hover:text-accent-cyan transition-colors">
                {project.title}
              </h3>
              <p className="relative text-sm text-accent-cyan/80 font-mono mt-1 mb-3">
                {project.tagline}
              </p>
              <p className="relative text-sm text-zinc-400 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-zinc-400 px-2 py-1 rounded-md border border-white/5 bg-white/[0.02]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

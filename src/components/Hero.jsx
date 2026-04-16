import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const profilePic = '/profile.jpg'

const phrases = [
  'Software Engineer',
  'Computer Science Student',
  'Full-Stack Developer',
  'Algorithmic Problem Solver',
]

function useTypewriter(words, speed = 90, pause = 1800) {
  const [index, setIndex] = useState(0)
  const [sub, setSub] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    if (!deleting && sub === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && sub === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }
    const t = setTimeout(
      () =>
        setSub((s) =>
          deleting ? current.substring(0, s.length - 1) : current.substring(0, s.length + 1)
        ),
      deleting ? speed / 2 : speed
    )
    return () => clearTimeout(t)
  }, [sub, deleting, index, words, speed, pause])

  return sub
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const typed = useTypewriter(phrases)

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24">
      <div className="section-container w-full grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="section-eyebrow">
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
          >
            Amit Haphiloni<span className="text-accent-cyan">.</span>
          </motion.h1>
          <motion.h2
            variants={item}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-400"
          >
            I build&nbsp;
            <span className="gradient-text animate-gradient">{typed}</span>
            <span className="inline-block w-[3px] h-[0.9em] align-middle bg-accent-cyan ml-1 animate-blink" />
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            I'm a second-year Computer Science student at{' '}
            <span className="text-white font-medium">HIT — Holon Institute of Technology</span>.
            A fast learner with strong analytical skills and a passion for solving complex
            algorithmic problems, eager to bring my skills and creativity to impactful projects.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch <Mail size={16} />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/amithaphiloni"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-accent-cyan transition-all hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/amit-haphiloni-332416346"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-accent-cyan transition-all hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:amithaphiloni@gmail.com"
              className="text-zinc-500 hover:text-accent-cyan transition-all hover:-translate-y-0.5"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto md:ml-auto w-64 sm:w-72 md:w-80 lg:w-[22rem] aspect-square"
        >
          {/* Glow ring */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent-cyan via-teal-400 to-accent-violet opacity-30 blur-2xl animate-pulse-slow" />
          {/* Rotating border */}
          <div
            className="absolute -inset-1 rounded-full opacity-70"
            style={{
              background:
                'conic-gradient(from 0deg, #22d3ee, #a78bfa, #34d399, #22d3ee)',
              animation: 'gradient 6s linear infinite',
            }}
          />
          <div className="absolute inset-1 rounded-full bg-ink-950" />
          <motion.img
            src={profilePic}
            alt="Amit Haphiloni"
            className="absolute inset-2 rounded-full object-cover w-[calc(100%-16px)] h-[calc(100%-16px)] shadow-2xl shadow-accent-cyan/20 animate-float"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-accent-cyan"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  )
}

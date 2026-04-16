import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/70 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan font-bold transition-all group-hover:bg-accent-cyan group-hover:text-ink-950">
            A
          </span>
          <span className="hidden sm:inline text-zinc-300">amit<span className="text-accent-cyan">.</span>dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <span className="text-accent-cyan font-mono mr-1">0{i + 1}.</span>
                {link.label}
              </a>
            </motion.li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="ml-3 btn-secondary text-sm !px-4 !py-2"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-ink-900/95 backdrop-blur-xl border-t border-white/5"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map((link, i) => (
                <li key={link.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={link.href}
                    className="block py-3 text-zinc-300 hover:text-accent-cyan"
                  >
                    <span className="text-accent-cyan font-mono mr-2">0{i + 1}.</span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary inline-block mt-2"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

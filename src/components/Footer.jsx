import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p className="font-mono">
          © {new Date().getFullYear()} Amit Haphiloni — Designed & built with React + Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/amithaphiloni"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-accent-cyan transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/amit-haphiloni-332416346"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent-cyan transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:amithaphiloni@gmail.com"
            aria-label="Email"
            className="hover:text-accent-cyan transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'

const WHATSAPP_NUMBER = '972506655050'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    const text = `Hi Amit, my name is ${form.name} (${form.email}).\n\n${form.message}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setStatus('sent')
  }

  return (
    <section id="contact" className="relative">
      <div className="section-container max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow text-center"
        >
          04. What's Next
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-center mb-4"
        >
          Let's build something <span className="gradient-text">together</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-zinc-400 max-w-xl mx-auto mb-14"
        >
          I'm currently open to internships, collaborations, and interesting engineering
          challenges. My inbox is always open — I'll get back to you as soon as I can.
        </motion.p>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 flex flex-col gap-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
              Reach Me
            </h3>

            <div className="space-y-5 text-sm">
              <a
                href="mailto:amithaphiloni@gmail.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-accent-cyan group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] group-hover:border-accent-cyan">
                  <Mail size={16} />
                </span>
                amithaphiloni@gmail.com
              </a>
              <div className="flex items-center gap-3 text-zinc-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Phone size={16} />
                </span>
                050-665-5050
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <MapPin size={16} />
                </span>
                Rishon LeZion, Israel
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-3">
              {[
                { icon: Github, href: 'https://github.com/amithaphiloni', label: 'GitHub' },
                {
                  icon: Linkedin,
                  href: 'https://linkedin.com/in/amit-haphiloni-332416346',
                  label: 'LinkedIn',
                },
                { icon: Mail, href: 'mailto:amithaphiloni@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-accent-cyan hover:border-accent-cyan transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                required
              />
            </div>
            <Field
              label="Message"
              name="message"
              as="textarea"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              required
              rows={5}
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center"
            >
              {status === 'sent'
                ? 'Message sent ✓'
                : status === 'sending'
                ? 'Sending...'
                : status === 'error'
                ? 'Failed — try again'
                : 'Send Message'}
              <Send size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, as, ...props }) {
  const Tag = as === 'textarea' ? 'textarea' : 'input'
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
        {label}
      </span>
      <Tag
        {...props}
        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-accent-cyan focus:bg-white/[0.05] resize-none"
      />
    </label>
  )
}

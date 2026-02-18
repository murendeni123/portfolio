import { motion } from 'framer-motion'
import { Mail, Linkedin, Phone, MapPin, PhoneCall, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import Modal from '../components/Modal'
import RevealSection from '../components/RevealSection'
import profile from '../config/profile.json'

const contactCards = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: 'blue',
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Murendeni Kwinda',
    href: profile.linkedInUrl,
    external: true,
    color: 'indigo',
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    modal: true,
    color: 'emerald',
  },
  {
    id: 'location',
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    color: 'violet',
  },
]

const colorMap = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/30',
    icon: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-100 dark:border-blue-800/40',
    hover: 'hover:border-blue-200 dark:hover:border-blue-700/60 hover:shadow-blue-500/10',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-900/30',
    icon: 'text-indigo-600 dark:text-indigo-400',
    border: 'border-indigo-100 dark:border-indigo-800/40',
    hover: 'hover:border-indigo-200 dark:hover:border-indigo-700/60 hover:shadow-indigo-500/10',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/30',
    icon: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-100 dark:border-emerald-800/40',
    hover: 'hover:border-emerald-200 dark:hover:border-emerald-700/60 hover:shadow-emerald-500/10',
  },
  violet: {
    bg: 'bg-violet-50 dark:bg-violet-900/30',
    icon: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-100 dark:border-violet-800/40',
    hover: 'hover:border-violet-200 dark:hover:border-violet-700/60 hover:shadow-violet-500/10',
  },
}

function PhoneModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contact by Phone" size="sm">
      <div className="text-center py-2">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-900/40 flex items-center justify-center mx-auto mb-4">
          <Phone size={28} className="text-emerald-600 dark:text-emerald-400" />
        </div>
        <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{profile.phone}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Choose how you'd like to reach out</p>

        <div className="flex flex-col gap-3">
          <a
            href={profile.phoneCall}
            className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <PhoneCall size={16} />
            Call Number
          </a>
          <a
            href={profile.phoneWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-500/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </Modal>
  )
}

export default function Contact() {
  const [phoneOpen, setPhoneOpen] = useState(false)

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-[0.2em]">04</span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 via-indigo-400/30 to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.05]">
            <span className="text-slate-900 dark:text-white">Get in </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mb-3">
            Let's connect. I'm currently based in {profile.location} and open to professional opportunities and collaborations.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mb-14" />
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((card, i) => {
            const colors = colorMap[card.color]
            const Icon = card.icon

            const inner = (
              <div className="flex flex-col items-center text-center gap-3 p-6">
                <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center`}>
                  <Icon size={22} className={colors.icon} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{card.label}</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 break-all">{card.value}</p>
                </div>
              </div>
            )

            const baseClass = `block w-full rounded-2xl border bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm shadow-lg shadow-black/5 dark:shadow-black/20 transition-all duration-200 ${colors.border} ${colors.hover} hover:shadow-xl`

            if (card.modal) {
              return (
                <RevealSection key={card.id} delay={i * 0.08}>
                  <motion.button
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setPhoneOpen(true)}
                    className={`${baseClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    aria-label="Open phone contact options"
                  >
                    {inner}
                  </motion.button>
                </RevealSection>
              )
            }

            if (card.href) {
              return (
                <RevealSection key={card.id} delay={i * 0.08}>
                  <motion.a
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noopener noreferrer' : undefined}
                    className={`${baseClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    aria-label={`${card.label}: ${card.value}`}
                  >
                    {inner}
                  </motion.a>
                </RevealSection>
              )
            }

            return (
              <RevealSection key={card.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className={baseClass}
                >
                  {inner}
                </motion.div>
              </RevealSection>
            )
          })}
        </div>
      </div>

      <PhoneModal isOpen={phoneOpen} onClose={() => setPhoneOpen(false)} />
    </section>
  )
}

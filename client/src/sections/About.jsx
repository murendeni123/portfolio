import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, TrendingUp } from 'lucide-react'
import RevealSection from '../components/RevealSection'
import profile from '../config/profile.json'

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-slate-200/70 dark:border-slate-700/70 rounded-2xl overflow-hidden bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50/80 dark:hover:bg-slate-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 border-t border-slate-100 dark:border-slate-700/60">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-[0.2em]">01</span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 via-indigo-400/30 to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.05]">
            <span className="text-slate-900 dark:text-white">Who </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">I am</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mb-3">
            A Software Developer with a professional tone and a focus on building robust, scalable web applications. My approach combines technical excellence with strategic thinking to deliver high-impact solutions.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mb-14" />
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <RevealSection delay={0.1} className="flex flex-col gap-4">
            <AccordionItem title="Strengths" defaultOpen>
              <ul className="mt-3 space-y-2.5">
                {profile.strengths.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center">
                      <Check size={11} className="text-blue-600 dark:text-blue-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionItem>

            <AccordionItem title="Skills">
              <div className="mt-3 space-y-4">
                {Object.entries(profile.skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionItem>

            <AccordionItem title="Tooling & Hosting">
              <div className="mt-3 space-y-4">
                {Object.entries(profile.tooling).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionItem>
          </RevealSection>

          <RevealSection delay={0.2}>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center">
                  <TrendingUp size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professional Growth</h3>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-100 to-transparent dark:from-blue-800 dark:via-blue-900/50" />
                <div className="space-y-8">
                  {profile.professionalGrowth.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.5 }}
                      className="pl-10 relative"
                    >
                      <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 border-2 border-white dark:border-slate-800 shadow-sm" />
                      <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { GraduationCap, Rocket } from 'lucide-react'
import RevealSection from '../components/RevealSection'
import profile from '../config/profile.json'

export default function Education() {
  return (
    <section id="education" className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-[0.2em]">02</span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 via-indigo-400/30 to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.05]">
            <span className="text-slate-900 dark:text-white">Edu</span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">cation</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mb-3">
            Academic foundation and specialized training in software engineering and security.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mb-14" />
        </RevealSection>

        <div className="relative max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-blue-200 to-transparent dark:from-blue-600 dark:via-blue-800/50 hidden sm:block" />

          <div className="space-y-6">
            {profile.education.map((item, i) => (
              <RevealSection key={item.year} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="relative sm:pl-16"
                >
                  <div className={`hidden sm:flex absolute left-0 top-5 w-12 h-12 rounded-full items-center justify-center border-2 shadow-md z-10 ${item.highlight ? 'bg-blue-600 border-blue-500 shadow-blue-500/30' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}
                  >
                    {item.highlight
                      ? <Rocket size={18} className="text-white" />
                      : <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />
                    }
                  </div>

                  <div className={`rounded-2xl p-6 border transition-all duration-200 ${
                    item.highlight
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 border-blue-500/50 shadow-xl shadow-blue-500/20 text-white'
                      : 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200/60 dark:border-slate-700/60 shadow-lg shadow-black/5 dark:shadow-black/20'
                  }`}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                            item.highlight
                              ? 'bg-white/20 text-white'
                              : 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                          }`}>
                            {item.year}
                          </span>
                          {item.institution && (
                            <span className={`text-xs font-medium ${
                              item.highlight ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                            }`}>
                              {item.institution}
                            </span>
                          )}
                        </div>
                        <h3 className={`text-lg font-bold mb-2 ${
                          item.highlight ? 'text-white' : 'text-slate-900 dark:text-white'
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-sm leading-relaxed ${
                          item.highlight ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { MapPin, ArrowDown } from 'lucide-react'
import profile from '../config/profile.json'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
}

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-2">
              <p className="text-base sm:text-lg font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                Welcome to my portfolio, I am
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05] mb-5"
            >
              {profile.fullName.split(' ')[0]}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                {profile.fullName.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <MapPin size={16} className="text-slate-400 flex-shrink-0" />
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                {profile.location}
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-10"
            >
              {profile.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:scale-95"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:scale-95"
              >
                About Me
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/30 to-indigo-500/20 blur-3xl scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-white/60 dark:border-slate-700/60 shadow-2xl shadow-blue-500/10">
                <img
                  src={profile.profileImage}
                  alt={`${profile.fullName} — ${profile.role}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.fullName)}&background=2563eb&color=fff&size=500&bold=true`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl px-4 py-3 shadow-xl border border-slate-100 dark:border-slate-700"
              >
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">Role</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{profile.role}</p>
              </motion.div>

            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-400 dark:text-slate-500 font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-slate-400 dark:text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

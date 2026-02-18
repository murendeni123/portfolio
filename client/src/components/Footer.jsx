import { Github, Linkedin, Mail } from 'lucide-react'
import profile from '../config/profile.json'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-700/60 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-slate-900 dark:text-white">MK.</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {year} {profile.fullName}.portfolio.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Mail size={18} />
            </a>
            <a
              href={profile.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

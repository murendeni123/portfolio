import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, ExternalLink, Layers, User, Wrench, Star, ChevronRight, Rocket } from 'lucide-react'
import Modal from '../components/Modal'
import Lightbox from '../components/Lightbox'
import RevealSection from '../components/RevealSection'
import profile from '../config/profile.json'

function DmsModal({ isOpen, onClose }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const project = profile.projects.find(p => p.id === 'dms')

  const openLightbox = (i) => {
    setLightboxIndex(i)
    setLightboxOpen(true)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title={project.title} size="xl">
        <div className="space-y-6">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-xl p-4 border border-slate-100 dark:border-slate-700/60">
              <div className="flex items-center gap-2 mb-3">
                <User size={15} className="text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">My Role</span>
              </div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{project.role}</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-xl p-4 border border-slate-100 dark:border-slate-700/60">
              <div className="flex items-center gap-2 mb-3">
                <Wrench size={15} className="text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map(tech => (
                  <span key={tech} className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/80 rounded-xl p-4 border border-slate-100 dark:border-slate-700/60">
            <div className="flex items-center gap-2 mb-3">
              <Star size={15} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Key Features</span>
            </div>
            <ul className="space-y-2">
              {project.features.map(feature => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <ChevronRight size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={15} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Gallery</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.gallery.map((src, i) => (
                <motion.button
                  key={i}
                  onClick={() => openLightbox(i)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`View gallery image ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`DMS screenshot ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop&sig=${i}`
                    }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            {profile.dmsLiveLink ? (
              <a
                href={profile.dmsLiveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <ExternalLink size={15} />
                View Live App
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-semibold text-sm border border-slate-200 dark:border-slate-700 cursor-not-allowed"
                aria-label="Live link available on request"
              >
                <ExternalLink size={15} />
                Live link available on request
              </button>
            )}
          </div>
        </div>
      </Modal>

      <Lightbox
        images={project.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex(idx => (idx - 1 + project.gallery.length) % project.gallery.length)}
        onNext={() => setLightboxIndex(idx => (idx + 1) % project.gallery.length)}
        onGoTo={(idx) => setLightboxIndex(idx)}
      />
    </>
  )
}

function ComingSoonModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Coming Soon" size="sm">
      <div className="text-center py-4">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center mx-auto mb-4">
          <Rocket size={28} className="text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Project in Progress</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
          I'm currently working on something exciting. Project details and case studies will be available soon.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Got it
        </button>
      </div>
    </Modal>
  )
}

function ProjectCard({ project, onOpenDms, onOpenComingSoon }) {
  const isFeatured = project.featured

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative"
    >
      <button
        onClick={isFeatured ? onOpenDms : onOpenComingSoon}
        className="w-full text-left rounded-2xl overflow-hidden border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm shadow-lg shadow-black/5 dark:shadow-black/20 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30 hover:border-slate-300/70 dark:hover:border-slate-600/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={isFeatured ? `View ${project.title} case study` : 'View coming soon project'}
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {!isFeatured && (
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <Lock size={20} className="text-white" />
              </div>
            </div>
          )}

          {isFeatured && (
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-blue-600 text-white shadow-lg">
                Featured
              </span>
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {project.summary}
          </p>
          {isFeatured && (
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
              View case study <ChevronRight size={14} />
            </div>
          )}
        </div>
      </button>
    </motion.div>
  )
}

export default function Projects() {
  const [dmsOpen, setDmsOpen] = useState(false)
  const [comingSoonOpen, setComingSoonOpen] = useState(false)

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-[0.2em]">03</span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 via-indigo-400/30 to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.05]">
            <span className="text-slate-900 dark:text-white">Pro</span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">jects</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mb-3">
            A collection of specialized web applications and platforms built with a focus on architecture, security, and user experience.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mb-14" />
        </RevealSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {profile.projects.map((project, i) => (
            <RevealSection key={project.id} delay={i * 0.08}>
              <ProjectCard
                project={project}
                onOpenDms={() => setDmsOpen(true)}
                onOpenComingSoon={() => setComingSoonOpen(true)}
              />
            </RevealSection>
          ))}
        </div>
      </div>

      <DmsModal isOpen={dmsOpen} onClose={() => setDmsOpen(false)} />
      <ComingSoonModal isOpen={comingSoonOpen} onClose={() => setComingSoonOpen(false)} />
    </section>
  )
}

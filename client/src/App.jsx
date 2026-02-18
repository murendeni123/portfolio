import { useTheme } from './hooks/useTheme'
import AnimatedBackground from './components/AnimatedBackground'
import FloatingMK from './components/FloatingMK'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <AnimatedBackground />
      <FloatingMK />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-slate-50/60 dark:bg-slate-800/20 -z-10" />
          <About />
        </div>
        <Education />
        <div className="relative">
          <div className="absolute inset-0 bg-slate-50/60 dark:bg-slate-800/20 -z-10" />
          <Projects />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

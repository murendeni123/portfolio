import { useReducedMotion, motion } from 'framer-motion'

const INSTANCES = [
  {
    initial: { x: '10vw', y: '15vh' },
    animate: {
      x: ['10vw', '22vw', '14vw', '8vw', '10vw'],
      y: ['15vh', '28vh', '42vh', '22vh', '15vh'],
      opacity: [0, 0.07, 0.05, 0.08, 0],
    },
    duration: 22,
    delay: 0,
  },
  {
    initial: { x: '65vw', y: '55vh' },
    animate: {
      x: ['65vw', '72vw', '60vw', '68vw', '65vw'],
      y: ['55vh', '40vh', '62vh', '50vh', '55vh'],
      opacity: [0, 0.06, 0.09, 0.05, 0],
    },
    duration: 26,
    delay: 8,
  },
  {
    initial: { x: '40vw', y: '70vh' },
    animate: {
      x: ['40vw', '32vw', '48vw', '38vw', '40vw'],
      y: ['70vh', '78vh', '65vh', '72vh', '70vh'],
      opacity: [0, 0.05, 0.07, 0.04, 0],
    },
    duration: 20,
    delay: 14,
  },
]

export default function FloatingMK() {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) return null

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      {INSTANCES.map((instance, i) => (
        <motion.span
          key={i}
          initial={{ x: instance.initial.x, y: instance.initial.y, opacity: 0 }}
          animate={instance.animate}
          transition={{
            duration: instance.duration,
            delay: instance.delay,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          className="absolute top-0 left-0 font-black tracking-tighter leading-none text-[100px] sm:text-[140px] lg:text-[180px]"
          style={{
            color: 'var(--mk, #6366f1)',
            filter: 'blur(2px)',
            mixBlendMode: 'soft-light',
            willChange: 'transform, opacity',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          MK
        </motion.span>
      ))}
    </div>
  )
}

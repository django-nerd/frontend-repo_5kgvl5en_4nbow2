import { motion } from 'framer-motion'

const videoUrl = 'https://cdn.coverr.co/videos/coverr-robotic-arm-in-a-factory-4471/1080p.mp4' // placeholder industrial/crafting vibe

function Hero({ onCTAClick }) {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />

      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 max-w-5xl tracking-tight"
          >
            Immersive Habitats. Engineered for Nature. Built for the Future.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg md:text-2xl text-slate-300/90 max-w-3xl"
          >
            ROC USA brings world-class zoo, aquarium, and museum theming to the American market.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button onClick={() => onCTAClick('contact')} className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-colors">
              Book a Project Call
            </button>
            <a href="#projects" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">
              View Portfolio
            </a>
          </motion.div>
        </div>
      </div>

      {/* parallax foreground subtle */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
    </section>
  )
}

export default Hero
